---
id: cnspec_vuln
title: cnspec vuln
---

Scans a target for Vulnerabilities.

```
cnspec vuln [flags]
```

### Options

```
      --asset-name string       User-override for the asset name
      --discover strings        Enable the discovery of nested assets. Supports: all,auto,container,container-images
  -h, --help                    help for vuln
      --inventory-ansible       Set the inventory format to Ansible.
      --inventory-domainlist    Set the inventory format to domain list.
      --inventory-file string   Set the path to the inventory file.
  -j, --json                    Run the query and return the object in a JSON structure.
  -o, --output string           Set output format: compact, csv, full, json, junit, report, summary, yaml (default "compact")
      --platform-id string      Select a specific target asset by providing its platform ID.
      --props stringToString    Custom values for properties (default [])
      --record string           Record all resource calls and use resources in the recording
      --sudo                    Elevate privileges with sudo.
      --use-recording string    Use a recording to inject resource data (read-only)
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
