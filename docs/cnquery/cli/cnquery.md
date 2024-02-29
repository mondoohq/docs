---
id: cnquery
title: cnquery
---

cnquery CLI

### Synopsis

cnquery is a cloud-native tool for querying your entire infrastructure.

### Options

```
      --api-proxy string   Set proxy for communications with Mondoo API
      --auto-update        Enable automatic provider installation and update (default true)
      --config string      Set config file path (default $HOME/.config/mondoo/mondoo.yml)
  -h, --help               help for cnquery
      --log-level string   Set log level: error, warn, info, debug, trace (default "info")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

- [cnquery bundle](cnquery_bundle.md) - Create, upload, and validate query packs
- [cnquery login](cnquery_login.md) - Register with Mondoo Platform
- [cnquery logout](cnquery_logout.md) - Log out from Mondoo Platform
- [cnquery providers](cnquery_providers.md) - Providers add connectivity to all assets
- [cnquery run](cnquery_run.md) - Run an MQL query
- [cnquery sbom](cnquery_sbom.md) - Experimental: Generate a software bill of materials (SBOM) for a given asset
- [cnquery scan](cnquery_scan.md) - Scan assets with one or more query packs
- [cnquery shell](cnquery_shell.md) - Interactive query shell for MQL
- [cnquery status](cnquery_status.md) - Verify access to Mondoo Platform
- [cnquery vault](cnquery_vault.md) - Manage vault environments
- [cnquery version](cnquery_version.md) - Display the cnquery version
