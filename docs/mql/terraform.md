---
title: Writing Mondoo Policy Checks for Terraform (HCL, Plan, and State) with MQL
sidebar_label: Terraform
sidebar_position: 3
description: Learn how to write Mondoo MQL checks for Terraform HCL, Plan, and State. Use the cnspec shell, Mondoo Terraform provider, filters, and variants to build production-grade Policy as Code across your IaC and runtime.
image: /img/featured_img/mondoo-feature.jpg
---

:::tip

This guide shows you how to write effective Mondoo MQL checks against Terraform HCL, Terraform Plan (JSON), and Terraform State (JSON). Throughout, we’ll use the `cnspec shell` as interactive development environment to connect to Terraform content and iterate on queries quickly.

:::

When teams scale Terraform, Policy as Code becomes essential to guarantee security, compliance, cost controls, and operational best practices—before changes hit production. The Mondoo Query Language (MQL) provides a simple, elegant, and consistent way to write checks against:

- Terraform HCL (your source code).
- Terraform Plan (JSON) (the proposed changes).
- Terraform State (JSON) (what exists according to Terraform).

In this guide you’ll:

- Install and use the Mondoo Terraform provider in the `cnspec shell`.
- Explore Terraform resources with MQL, Write checks using selectors, filters, and aggregators like `.where()` and `.all()`.
- Package checks into Mondoo policies with filters and variants so a single check can run consistently against HCL, Plan, and State.

---

## Mondoo Terraform Provider Overview

What are Mondoo Providers?

Mondoo providers are plugins for cnspec/cnquery that let you connect Mondoo to different platforms and data sources. Each provider understands how to talk to a specific technology (like AWS, GCP, Azure, Kubernetes, or Terraform) and exposes that environment in a way you can query with MQL.

Think of providers as connectors: they translate an external system’s data (cloud APIs, config files, Terraform plans, etc.) into Mondoo’s queryable objects.

### The cnspec Terraform Provider

Mondoo's Terraform provider for cnspec is not the same thing as a HashiCorp Terraform provider. Instead, it’s a cnspec plugin that knows how to parse Terraform data and make it available in MQL.

With the Terraform provider you can:

- **Scan Terraform code and outputs:** HCL files, Plan JSON, and State JSON. 
- **Query resources consistently:** Exposes Terraform resources as `terraform.resources` (HCL), `terraform.plan.resourceChanges` (Plan) or `terraform.state.resources` (State), so you can write the same style of MQL across all stages of a Terraform development lifecycle.
- **Use policy variants:** Define a check once and run it against Terraform HCL, Plan, State, and even runtime cloud APIs.


### Install the Terraform provider

```bash
cnspec providers install terraform
```

## Use the interactive shell

Use the `cnspec` shell to prototype MQL quickly before you codify checks in YAML.

### HCL (directory with .tf files):

```bash
cnspec shell terraform ./path/to/terraform/dir
```

### Plan (JSON produced by terraform show -json):

Generate a JSON plan file:

```bash
terraform show -json tfplan.binary > tfplan.json
```

Open a JSON plan file in the shell:

```bash
cnspec shell terraform ./path/to/tfplan.json
```

### State (local terraform.tfstate or exported JSON state):

Generate a JSON Terraform state:

```bash
terraform show -json > tfstate.json
```

Open a JSON Terraform state file in shell:

```bash
cnspec shell terraform ./path/to/terraform.tfstate
```

:::note

`cnspec shell` automatically detects platform. Run `asset.platform` to show the detected platform.

:::

## Writing Checks for Terraform with MQL

Below is a practical, step-by-step flow you can use in the shell to discover resources, drill into arguments, and transform an ad-hoc query into a production check.

### 1) List resources and identify targets

Start broad to see what Terraform resources Mondoo parsed:

```coffee
terraform.resources { nameLabel }
```

This returns an array like:

```bash
cnspec> terraform.resources
terraform.resources: [
  0: terraform.block type="resource" labels=[
       0: "random_string"
       1: "random"
     ]
  1: terraform.block type="resource" labels=[
       0: "google_cloud_run_v2_service"
       1: "hello_service"
     ]
  2: terraform.block type="resource" labels=[
       0: "google_cloud_run_v2_service_iam_member"
       1: "public_invoker"
     ]
  3: terraform.block type="resource" labels=[
       0: "google_redis_instance"
       1: "dev_memstore"
     ]
  4: terraform.block type="resource" labels=[
       0: "google_storage_bucket"
       1: "example"
     ]
]
```

### 2) Filter to a specific resource type

Use `.where()` to narrow down:

```coffee
terraform.resources.where( nameLabel == "google_storage_bucket" ) { * }
```

:::note

`{ * }` expands all fields for the resources that match. This is a great way to explore available arguments, nested blocks, and computed properties.

:::

### 3) Inspect specific arguments

Target exactly what you care about:

```coffee
terraform.resources.where( nameLabel == "google_storage_bucket" ) { arguments }
```

This returns all of the Terraform arguments found on in the HCL code:

```bash
cnspec> terraform.resources.where( nameLabel == "google_storage_bucket" ) { arguments }
terraform.resources.where: [
  0: {
    arguments: {
      labels: {
        environment: "dev"
      }
      location: "us-central1"
      name: [
        0: "lunalectric-bucket-"
        1: "random_string.random.id"
      ]
      uniform_bucket_level_access: true
    }
  }
]
```

### 4) Evaluate every matching resource with `.all(...)`

When writing pass/fail checks, `.all()` lets you assert a condition across every matching resource:

```coffee
terraform.resources.where( nameLabel == "google_storage_bucket" ).all( arguments.uniform_bucket_level_access == true )
```

## Using Filters to Control When Checks Run

Mondoo checks are only evaluated when their filters match. This prevents noise and ensures each check runs on the right content and platform.

**Example:** Only run on Terraform HCL and only when S3 buckets are present:

```yaml
filters: asset.platform == "terraform-hcl" && terraform.resources.contains(nameLabel == "aws_s3_bucket")
```

## Terraform Plan (JSON)

Terraform Plan checks catch misconfigurations before they land in State or production. Mondoo’s Terraform provider normalizes Plan data so your MQL patterns look the same as HCL/State—ideal for PR gating in CI.

### Open a cnspec shell against a Plan file

First, produce a JSON plan:

```bash
terraform plan -out=tfplan.binary
terraform show -json tfplan.binary > tfplan.json
```

Then open the shell on the JSON:

```bash
cnspec shell terraform ./path/to/tfplan.json
```

### 1) List resources in the Plan

```coffee
terraform.plan.resourceChanges { *  }
```

### 2) Filter to a specific resource type

```coffee
terraform.plan.resourceChanges.where( type == "google_storage_bucket" ) {*}
```

:::note

`{ * } `expands all fields so you can see what’s present in the planned configuration.

:::

### 3) Inspect specific arguments proposed by the Plan:

```coffee
terraform.plan.resourceChanges.where( type == "google_storage_bucket" ) { change.after.uniform_bucket_level_access }
```

This will show you what the `uniform_bucket_level_access` access configuration will be after running `terraform apply`

### 4) Evaluate every matching resource with `.all(...)`

```coffee
terraform.plan.resourceChanges.where( type == "google_storage_bucket" ).all( change.after.uniform_bucket_level_access == true )
```

This returns a single boolean `true` only if all planned `google_storage_bucket` enable `uniform_bucket_level_access`.

### 5) Add a filter so the check runs only on Plans (and only when relevant)

```yaml
filters: asset.platform == "terraform-plan" && terraform.plan.resourceChanges.contains( type == "google_storage_bucket" )
```

---

## Terraform State (JSON)

Terraform State checks verify what actually exists, closing the loop after HCL and Plan. Mondoo exposes state via `terraform.state.resources`, so you can assert real-world configuration with the same MQL style.

### Open a cnspec shell against a State file

First, export the current state to JSON:

```bash
terraform show -json > tfstate.json
```

Then open the shell on the exported state:

```bash
cnspec shell terraform ./tfstate.json
```

### 1) List resource types in Terraform State

```coffee
terraform.state.resources { type }
```

### 2) Filter to a specific resource type and expand fields

```coffee
terraform.state.resources.where(type == "google_storage_bucket") { values }
```

### 3) Evaluate every matching resource with `.all(...)`

```coffee
terraform.state.resources.where( type == "google_storage_bucket" ).all( values.uniform_bucket_level_access == true )
```

This returns a single boolean, `true` only if every GCS bucket in State has UBLA enabled.

### 4) Add a filter so the check runs only on State (and only when relevant)

```yaml
filters: asset.platform == "terraform-state" && terraform.state.resources.contains(type == "google_storage_bucket")
```

## Putting it all together

The real power of Mondoo comes from authoring one logical check that spans Runtime, Terraform HCL, Terraform Plan, and Terraform State using policy variants. A single policy definition can include:

- A clear title and numeric impact
- Rich docs (description, rationale)
- Multiple remediation paths (Terraform, Console, CLI)
- Variants that adapt the same intent to different platforms and contexts

The Mondoo Policy team publishes open source examples you can study and reuse. One check that illustrates this is the “Ensure that Cloud Storage buckets have uniform bucket-level access enabled” check, which defines variants for:

- Runtime (gcp-storage-bucket)
- Terraform HCL
- Terraform Plan
- Terraform State

👉 Full Example (open source): [Ensure that Cloud Storage buckets have uniform bucket-level access enabled](https://github.com/mondoohq/cnspec/blob/29d45991446d752b03691f38fb68e8b350aed1ec/content/mondoo-gcp-security.mql.yaml#L690-L758)

### Why this pattern works

One intent, many surfaces: The top-level check captures the security rule once; variants adapt it to each stage (Runtime, HCL, Plan, State).

Noise-free filtering: Each variant runs only when the target platform and resource type are present.

Clear ownership: title, impact, and rich docs (with multiple remediation paths) make the check understandable and actionable for SRE, SecOps, and platform teams.

CI → Prod continuity: HCL/Plan variants prevent bad changes; State/Runtime variants ensure reality stays compliant.
