---
id: cnspec_shell
title: cnspec shell
---

Interactive query shell for MQL.

### Synopsis

Run an interactive shell in which you can explore MQL queries.

```
cnspec shell [flags]
```

### Options

```
  -c, --command string         MQL query to executed in the shell.
      --discover strings       Enable the discovery of nested assets. Supports: all,auto,container,container-images
  -h, --help                   help for shell
      --platform-id string     Select a specific target asset by providing its platform ID.
      --record string          Record all resource calls and use resources in the recording
      --sudo                   Elevate privileges with sudo.
      --use-recording string   Use a recording to inject resource data (read-only)
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
