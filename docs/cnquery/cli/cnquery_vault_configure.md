---
id: cnquery_vault_configure
title: cnquery vault configure
---

Configure a vault environment

### Synopsis

cnquery vault configure mondoo-client-vault --type linux-kernel-keyring

```
cnquery vault configure VAULTNAME [flags]
```

### Options

```
  -h, --help                    help for configure
      --inventory-file string   Set the path to the inventory file
      --option stringToString   addition vault connection options, multiple options via --option key=value (default [])
      --type string             possible values: encrypted-file | gcp-secret-manager | aws-secrets-manager | aws-parameter-store | gcp-berglas | none | linux-kernel-keyring | hashicorp-vault | memory | keyring
```

### Options inherited from parent commands

```
      --api-proxy string   Set proxy for communications with Mondoo Platform API
      --auto-update        Enable automatic provider installation and update (default true)
      --config string      Set config file path (default $HOME/.config/mondoo/mondoo.yml)
      --log-level string   Set log level: error, warn, info, debug, trace (default "info")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

- [cnquery vault](cnquery_vault.md) - Manage vault environments
