---
title: Chef Infra and Mondoo
sidebar_label: Chef Infra
sidebar_position: 3
description: This page covers how to use Chef Infra with Mondoo to install cnspec on hosts to run policies as code.
image: /img/featured_img/mondoo-feature.jpg
---

This page covers how to use Chef Infra to install cnspec on hosts to run policies as code.

<!-- prettier-ignore -->
import Partial from "./_automation-providers-note.mdx";

<Partial />{" "}

## Installing using Chef Infra

We publish an official [mondoo cookbook](https://supermarket.chef.io/cookbooks/mondoo) on Chef Supermarket. You can use the cookbook in your own [wrapper cookbooks](https://www.chef.io/blog/writing-wrapper-cookbooks) or [Chef Infra roles](https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-environments-in-chef-to-control-server-configurations)

To apply the cookbook, set the Mondoo Registration Token via:

```bash title="Command Line"
default['cnspec']['registration_token'] = "changeme"
```

## Example: Apply a cookbook to an Amazon EC2 instance

1. Spin up a new Linux instance on [AWS](https://console.aws.amazon.com/console/home)
2. Create the `run` wrapper cookbook as documented in our [example](https://github.com/mondoohq/chef-mondoo/tree/main/examples)
3. Run `chef-run ssh://user@host ./run`
4. All instances [reported their vulnerability status](https://console.mondoo.com/)

---
