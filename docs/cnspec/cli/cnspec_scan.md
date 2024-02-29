---
id: cnspec_scan
title: cnspec scan
---

Scan assets with one or more policies.

### Synopsis

This command triggers a new policy scan for an asset. By default, cnspec scans the local
system with its pre-configured policies:

    $ cnspec scan local

You can also manually select a local policy to execute and run it without
storing results in the server:

    $ cnspec scan local --policy-bundle policyfile.yaml --incognito

In addition, cnspec can scan assets remotely via SSH. By default, cnspec uses the operating system
SSH agent and SSH config to retrieve the credentials:

    $ cnspec scan ssh ec2-user@52.51.185.215
    $ cnspec scan ssh ec2-user@52.51.185.215:2222

cnspec supports scanning AWS, Azure, and GCP accounts and instances.
Find out more in each sub-commands help menu. Here are a few examples:

    $ cnspec scan aws --region us-east-1
    $ cnspec scan azure --subscription ID --group NAME
    $ cnspec scan gcp project ID

You can also access Docker containers and images. cnspec supports local containers
and images as well as images in Docker registries:

    $ cnspec scan docker container b62b276baab6
    $ cnspec scan docker image ubuntu:latest

Additionally, you can quickly scan a container registry:

    $ cnspec scan container registry harbor.lunalectric.com
    $ cnspec scan container registry 123456789.dkr.ecr.us-east-1.amazonaws.com/repository

cnspec also supports GCP's container registry, GCR:

    $ cnspec scan gcp gcr PROJECT_ID

Vagrant is supported as well:

    $ cnspec scan vagrant HOST

You can also use an inventory file:

    $ cnspec scan --inventory-file inventory.yml

This scan uses an existing Ansible inventory:

    $ ansible-inventory -i hosts.ini --list | cnspec scan --inventory-ansible

To learn more, read the [cnspec docs](/cnspec/home/).

```
cnspec scan [flags]
```

### Options

```
      --annotation stringToString   Add an annotation to the asset. (default [])
      --asset-name string           User-override for the asset name
      --detect-cicd                 Try to detect CI/CD environments. If detected, set the asset category to 'cicd'. (default true)
      --discover strings            Enable the discovery of nested assets. Supports: all,auto,container,container-images
  -h, --help                        help for scan
      --incognito                   Run in incognito mode. Do not report scan results to  Mondoo Platform.
      --inventory-ansible           Set the inventory format to Ansible.
      --inventory-domainlist        Set the inventory format to domain list.
      --inventory-file string       Set the path to the inventory file.
  -j, --json                        Run the query and return the object in a JSON structure.
  -o, --output string               Set output format: compact, csv, full, json, junit, report, summary, yaml (default "compact")
      --output-target string        Set output target to which the asset report will be sent. Currently only supports AWS SQS topic URLs and local files
      --platform-id string          Select a specific target asset by providing its platform ID.
      --policy strings              Lists policies to execute. This requires --policy-bundle. You can pass multiple policies using --policy POLICY.
  -f, --policy-bundle strings       Path to local policy file
      --props stringToString        Custom values for properties (default [])
      --record string               Record all resource calls and use resources in the recording
      --score-threshold int         If any score falls below the threshold, exit 1.
      --sudo                        Elevate privileges with sudo.
      --use-recording string        Use a recording to inject resource data (read-only)
```

### Options inherited from parent commands

```
      --api-proxy string   Set proxy for communications with Mondoo API
      --auto-update        Enable automatic provider installation and update (default true)
      --config string      Set config file path (default $HOME/.config/mondoo/mondoo.yml)
      --log-level string   Set log level: error, warn, info, debug, trace (default "info")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

- [cnspec](cnspec.md) - cnspec CLI
