---
title: Query Your Infrastructure
id: cnquery-query
sidebar_label: Query Your Infrastructure
displayed_sidebar: cnquery
sidebar_position: 3
description: Learn to run MQL queries from the command line and include MQL queries in automation.
image: /img/featured_img/mondoo-feature.jpg
---

MQL is an easy, lightweight, ultra-fast query language built for searching and filtering infrastructure configuration data. Its data extraction resembles GraphQL, while its intuitive scripting approach is similar to JavaScript.

MQL integrates with [hundreds of resources](/mql/resources) to retrieve information about your infrastructure.

## Run standalone queries from the command line

:::tip

Our interactive cnquery shell, with auto-complete, is the easiest way to query your systems. [Learn more.](/cnquery/#run-queries-in-the-cnquery-shell)

:::

To run standalone queries from the command line, use the `cnquery run` command:

```bash
cnquery run TARGET -c QUERY
```

| For...   | Substitute...                                                           |
| -------- | ----------------------------------------------------------------------- |
| `TARGET` | The asset to query, such as `local` or a transport to a remote machine. |
| `QUERY`  | The MQL query that specifies the information you want.                  |

:::tip

For a list of supported targets and parameters, use the `help` command:

```bash
cnquery help run
```

:::

### Examples

This runs a query against your local system. It returns a list of the services configured on your system along with the boolean value whether each service is running:

```bash
cnquery run local -c "services.list { name running }"
```

This query finds all AWS EC2 instances, across every enabled region within an AWS account, that are configured with a public IP address, and returns the values for the fields `instanceId`, `region`, `state`, `tags`, and `publicIp`:

```coffeescript
aws.ec2.instances.where( publicIp != '' ) {
  instanceId
  region
  state
  tags
  publicIp
}
```

This lists all users and returns the values for every field available for the `user` resource:

```coffeescript
users.list { * }
```

This finds all container repositories used for images in a Kubernetes cluster:

```coffeescript
k8s.pods {
 name
 containers.map( containerImage.repository.fullName )
}
```

:::tip

`.map` is a function for arrays that takes a given field and extracts it. Unlike block calls (`{ .. }`), it directly returns the given field.

:::

### Resources

A fundamental building block for writing queries, resources let you retrieve the configuration of an asset.

These are just a few examples of MQL resources for servers and endpoints on **all** the platforms that Mondoo supports:

- `platform` queries the host for information about the platform, including `name`, `family`, `release`, and more.

- `user` retrieves information about users, including the `name`, `UID`, `GID`, `home`, `shell`, and more.

- `packages` reveals information about packages on the host, including `name`, `version`, `installed`, `outdated`, and more.

MQL has resources that are platform specific as well. These are some examples:

- `k8s.container` lets you explore more than a dozen Kubernetes container configuration details, including `imagePullPolicy`, `workingDir`, and whether the container should allocate a TTY for itself.

- `terraform.block` queries Terraform block arguments, attributes, and more.

- `windows.hotfix` exposes `installedOn` and `installedBy` dates and other information about important Windows updates.

For a full list of available resources, enter the `help` command within the cnquery Shell. This returns the available resources and their descriptions. You can also run `help <resource_name>` to get more information on a specific resource.

### Fields

Each resource has _fields_ that you use to return the value of a specific configuration associated with that resource. These are some of the fields from two resource examples above:

- The fields for `platform` include `name`, `family`, `release`, and others.

- The fields for `k8s.container` include `imagePullPolicy`, `workingDir`,`readinessProbe`, `tty`, and more. Start off by looking at the `platform` resource, which is common to all operating systems supported by Mondoo.

### Filtering results and retrieving multiple fields

You can filter results and return multiple fields at once:

```bash
RESOURCE {FIELD1 FIELD2 FIELD3 }
```

| For...     | Substitute...                                    |
| ---------- | ------------------------------------------------ |
| `RESOURCE` | The resource for the information you want.       |
| `FIELD1`   | The specific field containing the data you want. |
| `FIELD2`   | Another field containing the data you want.      |
| `FIELD3`   | Another field containing the data you want.      |

For example, this command retrieves the name of the running platform, its release number, and the architecture it's running on:

```coffeescript
platform { name release arch }
```

## Operators and functions

For information on the MQL operators and functions you can use to write queries, read [Write Effective MQL](/mql/mql.write/).

## Learn more

- To explore cnquery commands, read the [CLI Reference](/cnquery/cli/cnquery).
- To explore the capabilities of the MQL language, read the [MQL docs](/mql/resources).

---
