---
id: cnquery_run
title: cnquery run
---

Run an MQL query

### Synopsis

Run an MQL query on the CLI and displays its results.

```
cnquery run [flags]
```

### Options

```
      --ast                  Parse the query and return the abstract syntax tree (AST).
  -c, --command string       MQL query to executed in the shell.
  -h, --help                 help for run
      --info                 Parse the query and provide information about it.
  -j, --json                 Run the query and return the object in a JSON structure.
      --parse                Parse the query and return the logical structure.
      --platform-id string   Select a specific target asset by providing its platform ID.
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

- [cnquery](cnquery.md) - cnquery CLI
