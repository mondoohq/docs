---
title: Assess HashiCorp Terraform Code Security with cnspec
sidebar_label: Terraform
sidebar_position: 3
displayed_sidebar: cnspec
description: This page provides an overview of how to use Mondoo alongside HashiCorp Terraform automation.
image: /img/featured_img/mondoo-terraform.jpg
---

Mondoo is designed to scan and detect security issues and misconfigurations with Terraform (hcl) code during development process on the developer's workstation, as well as an automated step in CI/CD pipelines. Additionally, Mondoo can be configured as a post-provisioning step by scanning your infrastructure against policies as code after each Terraform apply.

Mondoo's end-to-end process provides a multi-layered approach to find and fix security issues before they reach production. This page provides detailed information on how to use Mondoo alongside Terraform.

### Before you begin

Before you begin working with Mondoo for static analysis of Terraform code, ensure you have:

- A Mondoo account (Go to [https://console.mondoo.com](https://console.mondoo.com) and sign-up for a free account).
- cnspec [installed on your workstation](/cnspec/) and registered with Mondoo Platform.

## Terraform static analysis with cnspec

cnspec natively supports static analysis of Terraform (hcl) code for security misconfigurations using policy as code in Mondoo Platform. This process allows infrastructure developers responsible for writing and maintaining Terraform code for their organization to detect security issues before pushing changes to a remote repository.

Static analysis of Terraform code can also be configured as a step into any CI/CD tool. This added step can be a guardrail to ensure infrastructure meets security requirements for the business.

### Enable Terraform policies maintained by Mondoo

Mondoo Platform has a growing list of policies for static analysis of Terraform code. Mondoo policies are developed by translating infrastructure configuration security recommendations and best practices into automated tests using MQL, and provide a solid template for developing your own policies should the need arise.

Start by enabling any Terraform policies in Mondoo Platform you want to run against your Terraform code:

1. Log in to [https://console.mondoo.com](https://console.mondoo.com).

2. In the left navigation, under **Security**, select **Policies**.

3. In the top-right corner, select the plus icon (+).

4. In the **Filter policies...** box, search for "Terraform".

5. To the right of the policy you want to enable, select the **ADD TO SPACE** button.

### Scan Terraform code with cnspec

To scan your Terraform code with cnspec, open a terminal and run this command:

```bash title="Static analysis of Terraform code with cnspec"
cnspec scan terraform /path/to/terraform/
```

cnspec scans any `.tf` files in the specified directory and returns the results to `STDOUT` in the terminal. If you're logged into Mondoo Platform, cnspec also sends results to your Mondoo account.

![Terraform Scan Report in Mondoo UI](/img/cnspec/terraform/terraform-asset.png)

## Developing Terraform policies as code with Mondoo

MQL provides native resources for querying Terraform code, and making checks. While detailed information on each Terraform specific resource can be found in our [MQL Reference](/mql/resources/), this section provides an overview of those resources as well as examples of translating security requirements for Terraform code into policy as code.

### Overview of MQL resources for Terraform

Terraform language syntax is built around two key syntax constructs: arguments and blocks. Additionally, there are a number of other constructs that Terraform provides with the language including resources, data sources, providers, and modules that are used when automating infrastructure with Terraform.

MQL provides these native resources for querying Terraform code to develop checks for policies as code, and for querying using the cnspec shell:

- `terraform` - Parent resource in MQL that provides a number of fields for describing Terraform code.
- `terraform.files` - Returns a list of `terraform.file` resources of all of the Terraform files found when scanning a directory.
- `terraform.tfvars` - Returns a dict with attributes from all `.tfvars` and `.tfvars.json` files found when scanning a directory.
- `terraform.modules` - Returns a list of `terraform.module` resources from Terraform modules referenced throughout your Terraform code.
- `terraform.blocks` - Returns a list of `terraform.block` resources describing any Terraform blocks within each Terraform resource.

### Example: Ensure AWS S3 buckets use server-side encryption

A common security configuration for AWS S3 buckets that is found in both the CIS AWS Foundations benchmark, as well as numerous AWS best practice policies is to enable server-side encryption. This configuration is optional when provisioning an S3 bucket with Terraform, but is easily tested with MQL.

**Terraform S3 resource with server-side encryption**

This code snippet provides an example of using Terraform to provision an S3 bucket with server-side encryption:

```hcl

resource "aws_kms_key" "mykey" {
  description             = "This key is used to encrypt bucket objects"
  deletion_window_in_days = 10
}

resource "aws_s3_bucket" "my-encrypted-bucket" {
  bucket = "my-encrypted-bucket"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.mykey.arn
        sse_algorithm     = "aws:kms"
      }
    }
  }
}

```

As defined in the [Terraform documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#apply_server_side_encryption_by_default) for the `aws_s3_bucket` resource, the `server_side_encryption_configuration` argument is optional, but when used requires a `rule` object defining the SSE configuration. The example above defines an SSE rule with the argument `apply_server_side_encryption_by_default` that enables SSE by default for the bucket.

**Translate policy to MQL**

This code snippet provides an example of how to test Terraform code to ensure any `aws_s3_bucket` resources define a `rule` that sets the `apply_server_side_encryption_by_default` argument:

```mql

terraform.resources.where( nameLabel == 'aws_s3_bucket') {
  blocks {
    blocks.one( _.type == "rule" && _.blocks.one( type == 'apply_server_side_encryption_by_default' ))
  }
}

```

**How this query works**

As Terraform projects tend to include many different Terraform resources within the same file or directory, MQL makes it easy to filter by specific resources using the `.where` built-in function so the query targets just the `aws_s3_bucket` resources:

```mql
terraform.resources.where( nameLabel == "aws_s3_bucket")
```

Filtering by `aws_s3_bucket` resources returns a list of objects that contains fields that describe the Terraform code. The `terraform.block` resource provides fields for describing blocks of code within a given resource. The code snippet above is an example of nested blocks (blocks inside of blocks) as follows:

```hcl
...
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.mykey.arn
        sse_algorithm     = "aws:kms"
      }
    }
...
```

To access the nested block, the MQL query calls the `block` field on the results from `terraform.resources.where( nameLabel == 'aws_s3_bucket')`, which returns a list of all `blocks` with each `aws_s3_bucket` resource. To illustrate this further, consider this query in cnspec Shell that shows all of the available fields for the `terraform.block` resource:

```mql
mondoo> terraform.resources.where( nameLabel == 'aws_s3_bucket') { blocks {*} }
terraform.resources.where: [
  0: {
    blocks: [
      0: {
        snippet: "     6 | resource \"aws_s3_bucket\" \"mybucket\" {
     7 |   bucket = \"mybucket\"
     8 |
     9 |   server_side_encryption_configuration {
    10 |     rule {
    11 |       apply_server_side_encryption_by_default {
    12 |         kms_master_key_id = aws_kms_key.mykey.arn
"
        start: terraform.fileposition id = file.position//tmp/terraform/s3.tf/9/3
        type: "server_side_encryption_configuration"
        blocks: [
          0: terraform.block id = terraform.block//tmp/terraform/s3.tf/10/5
        ]
        arguments: {}
        nameLabel: ""
        end: terraform.fileposition id = file.position//tmp/terraform/s3.tf/9/3
        labels: []
        attributes: {}
      }
    ]
  }
]
```

The results show a number of fields that can be used to refine the query, including the existence of the nested `blocks`. The query above can be further refined by accessing the nested blocks as follows:

```mql
cnspec> terraform.resources.where( nameLabel == 'aws_s3_bucket') { blocks { blocks { * } } }
terraform.resources.where: [....................
  0: {
    blocks: [
      0: {
        blocks: [
          0: {
            end: terraform.fileposition id = file.position//tmp/terraform/s3.tf/10/5
            labels: []
            snippet: "     7 |   bucket = \"mybucket\"
     8 |
     9 |   server_side_encryption_configuration {
    10 |     rule {
    11 |       apply_server_side_encryption_by_default {
    12 |         kms_master_key_id = aws_kms_key.mykey.arn
    13 |         sse_algorithm     = \"aws:kms\"
"
            arguments: {}
            nameLabel: ""
            attributes: {}
            type: "rule"
            blocks: [
              0: terraform.block id = terraform.block//tmp/terraform/s3.tf/11/7
            ]
            start: terraform.fileposition id = file.position//tmp/terraform/s3.tf/10/5
          }
        ]
      }
    ]
  }
]
```

The output above shows the nested block contains a field labeled `type` with a value of `"rule"`. The `aws_s3_bucket` resource `server_side_encryption_configuration` argument allows for the definition of multiple rules, and any of those rules may define the `apply_server_side_encryption_by_default` argument.

MQL makes it easy to check for the existence of one configuration with the `.one` built-in function. The example above uses this query:

```mql
...

blocks.one( _.type == "rule" && _.blocks.one( type == 'apply_server_side_encryption_by_default' ))

...

```

The code above checks for one block where the `type == "rule"` along with using the `&&` operator to check for a `block` that has a `type == 'apply_server_side_encryption_by_default'`. The use of `_.type` and `_.blocks.one` are constructs of MQL to loop through any `type` and `block` fields, and can be used when iterating over lists.

## Terraform post-provisioning scans with cnspec

Mondoo can also be used to as post-provisioning step when running `terraform apply` to run policies as code against your infrastructure. Results from scans are sent to Mondoo Platform to provide observability that infrastructure is continuously scanned for adherence to company policy.

Additionally, `cnspec scan` exit statuses can be used to trigger action in the event of a failure such as sending a notification to the appropriate team.

### Example 1: Post-provision scan of Digital Ocean infrastructure

This Terraform snippet launches a DigitalOcean droplet with Nginx installed, and scans the infrastructure with Mondoo against any policies enabled in Mondoo Platform.

```tf title="main.tf"
terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = ">= 2.5.1"
    }
  }
}

variable "do_token" {
  description = "value of DIGITALOCEAN_TOKEN"
}

provider "digitalocean" {
  token = var.do_token
}

variable "private_key" {
  description = "path to private key"
  default = "~/.ssh/id_rsa"
}

variable "public_key" {
  description = "path to public key"
  default = "~/.ssh/id_rsa.pub"
}

resource "digitalocean_ssh_key" "default" {
  name = "terraform"
  public_key = file(var.public_key)
}

resource "digitalocean_droplet" "mywebserver" {
  ssh_keys = [
    digitalocean_ssh_key.default.fingerprint
  ]
  image              = "ubuntu-18-04-x64"
  region             = "nyc1"
  size               = "s-1vcpu-1gb"
  private_networking = true
  backups            = true
  ipv6               = true
  name               = "sample-tf-droplet"

  # The connection is required to let provisioner's know how to connect
  connection {
    type     = "ssh"
    host     = self.ipv4_address
    user     = "root"
    timeout  = "2m"
    private_key = file(var.private_key)
  }

  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin",
      "sudo apt update",
      "sudo apt install -y nginx",
    ]
  }

  provisioner "local-exec" {
    command = "cnspec scan ssh root@${self.ipv4_address} -i ${var.private_key} --insecure --score-threshold 0"
  }
}
```

**Run terraform apply**

To run the example:

```bash bash title="Command Line"
# set token for DigitalOcean
export DIGITALOCEAN_TOKEN=d1...ef
# run terraform
terraform apply -var do_token=$DIGITALOCEAN_TOKEN
```

To trigger cnspec, use the `local-exec` and pass in the required arguments to connect to the machine:

```tf title="main.tf"
provisioner "local-exec" {
  command = "cnspec scan ssh root@${self.ipv4_address} -i ${var.private_key} --insecure --score-threshold 0"
}
```

**Run terraform destroy**

You can easily destroy the setup via:

```bash title="Run terraform destroy"
terraform destroy -var do_token=$DIGITALOCEAN_TOKEN
```

### Example 2: Post-provision scan of AWS infrastructure

This example illustrates the combination of Terraform & Mondoo to build and scan infrastructure in AWS. Similar to the example above, it runs `cnspec scan` as a post-provisioning step for the EC2 instance. Additionally, it also runs a scan for the AWS account itself.

**Terraform configuration**

```tf title="main.tf"
resource "aws_instance" "web" {
  # The connection block tells our provisioner how to
  # communicate with the resource (instance)
  connection {
    host    = coalesce(self.public_ip, self.private_ip)
    type    = "ssh"
    user    = "ubuntu"
    timeout = "2m"
    private_key = file(var.private_key)
  }

  instance_type = "t2.micro"

  # Lookup the correct AMI based on the region as we specified
  ami = var.aws_amis[var.aws_region]

  # The name of our SSH keypair we created above.
  key_name = aws_key_pair.auth.id

  # Our Security group to allow HTTP and SSH access
  security_groups = [aws_security_group.default.name]

  # We run a remote provisioner on the instance after creating it.
  # In this case, we just install nginx and start it. By default,
  # this should be on port 80s
  provisioner "remote-exec" {
    inline = [
      "sudo apt update -y",
      "sudo apt install -y nginx",
      "sudo service nginx start",
    ]
  }

  # run scan of instance
  provisioner "local-exec" {
    command = "cnspec scan ssh ubuntu@${coalesce(self.public_ip, self.private_ip)} -i ${var.private_key} --insecure --score-threshold 0"
  }
}

# run scan of aws account
resource "null_resource" "example1" {
  provisioner "local-exec" {
    command = "cnspec scan aws --option 'region=${var.aws_region}' --score-threshold 0"
  }

  depends_on = [
    "aws_instance.web"
  ]
}

```

**Clone the example repository**

To run the full example, clone the examples first:

```bash title="Command Line"
git clone https://github.com/mondoohq/installer.git
cd mondoo/examples/terraform-aws
```

**Initialize the project**

Initialize the project by running `terraform init`:

```bash title="Download dependent modules"
terraform init
```

**Run terraform apply**

Now you can provision a new EC2 instance:

```bash title="Run Terraform apply"
terraform apply -var 'key_name=terraform' -var 'public_key=~/.ssh/id_rsa.pub' -var 'private_key=~/.ssh/id_rsa'
```

**Run terraform destroy**

You can destroy the setup using:

```bash title="Run terraform destroy"
terraform destroy -var 'key_nameterraform' -var 'public_key=~/.ssh/id_rsa.pub' -var 'private_key=~/.ssh/id_rsa'
```

## Learn more

- To learn more about how the MQL query language works, read [Write Effective MQL](/mql/mql.write/).

---
