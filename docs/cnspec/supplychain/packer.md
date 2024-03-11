---
title: Assess HashiCorp Packer Machine Image Security with cnspec
sidebar_label: Packer
sidebar_position: 2
displayed_sidebar: cnspec
description: This page provides an overview of how to use cnspec to build secure base images with HashiCorp Packer.
image: /img/featured_img/mondoo-packer.jpg
---

Mondoo maintains an [open source plugin](https://github.com/mondoohq/packer-plugin-cnspec) for HashiCorp Packer for securing and validating machine images.

# Install Packer Plugin cnspec

## Using the `packer init` command

Starting from version 1.7, Packer supports a new `packer init` command allowing automatic installation of Packer plugins. Read the [Packer documentation](https://developer.hashicorp.com/packer/docs/commands/init) for more information.

To install this plugin, copy and paste this code into your Packer configuration . Then, run `packer init`.

```hcl
packer {
  required_plugins {
    mondoo = {
      version = ">= 0.3.0"
      source  = "github.com/mondoohq/mondoo"
    }
  }
}
```

#### Manual installation

You can find pre-built binary releases of the plugin [here](https://github.com/mondoohq/packer-plugin-cnspec/releases).

Once you have downloaded the latest archive corresponding to your target OS, uncompress it to retrieve the plugin binary file corresponding to your platform. To install the plugin, please follow the Packer documentation on
[installing a plugin](https://developer.hashicorp.com/packer/docs/plugins#installing-plugins).

### Build from source

If you prefer to build the plugin from sources, clone the GitHub repository locally and run the command `go build` from the root directory. Upon successful compilation, a `packer-plugin-cnspec` plugin binary file can be found in the root directory. To install the compiled plugin, please follow the official Packer documentation on [installing a plugin](https://developer.hashicorp.com/packer/docs/plugins#installing-plugins).

## Configuration

| **Name**             | **Description**                                                                                                                                | **Type**         | **Default** | **Required** |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | ------------ |
| `annotations`        | Custom annotations can be applied to Packer build assets to provide additional metadata for asset tracking.                                    | `map of strings` | None        | No           |
| `asset_name`         | Overwrite the asset name in Mondoo Platform.                                                                                                   | `string`         | None        | No           |
| `on_failure`         | Set `on_failure = "continue"` to ignore build failures that do not meet any set `score_threshold`.                                             | `string`         | None        | No           |
| `score_threshold`    | Set a score threshold for Packer builds `[0-100]`. Any scans that fall below the `score_threshold` will fail unless `on_failure = "continue"`. | `int`            | None        | No           |
| `sudo`               | Use sudo to elevate permissions when running scans.                                                                                            | `bool`           | None        | No           |
| `mondoo_config_path` | The path to the configuration to be used when running Mondoo scans. If left empty, cnspec tries to determine the config automatically.         | `string`         | None        | No           |

### Example: Complete configuration

```hcl
  provisioner "mondoo" {
    on_failure      = "continue"
    score_threshold = 85
    mondoo_config_path = "/etc/mondoo-config.json"
    asset_name      = "example-secure-base-image"
    sudo {
      active = true
    }

    annotations = {
      Source_AMI    = "{{ .SourceAMI }}"
      Creation_Date = "{{ .SourceAMICreationDate }}"
    }
  }
}
```

## Learn more

- AWS users can [build secure AMIs with Mondoo and Packer](/cnspec/cloud/aws/packer/).

- Google Cloud users can [build secure VMs with Mondoo and Packer](/cnspec/cloud/gcp/packer)

- To learn more about how the MQL query language works, read [Write Effective MQL](/mql/mql.write/).

---
