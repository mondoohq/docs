---
id: cnspec_shell
title: cnspec shell
---

Run an interactive shell to make easy queries and assertions.

To learn more, read [Get Started with cnspec](/cnspec/).

### Synopsis

Open an interactive shell in which you can explore [MQL](/mql/home/) queries and assertions. Auto-complete and help make it easy.

```bash
cnspec shell [flags]
```

### Examples: cloud

#### Query AWS

```bash
cnspec shell aws
```

To learn more, read [Assess AWS Security with cnspec](/cnspec/cloud/aws).

#### Query Azure

```bash
cnspec shell azure --subscription SUBSCRIPTION_ID --group GROUP_NAME
```

To learn more, read [Assess Azure Security with cnspec](/cnspec/cloud/azure/).

#### Query Google Cloud (GCP)

```bash
cnspec shell gcp project PROJECT_ID
```

To learn more, read [Assess Google Cloud Security with cnspec](/cnspec/cloud/gcp/).

#### Query Kubernetes

```bash
cnspec shell k8s
```

To learn more, read [Assess Kubernetes Security with cnspec](/cnspec/cloud/k8s/).

#### Query Oracle Cloud Infrastructure (OCI)

```bash
cnspec shell oci
```

To learn more, read [Assess Oracle Cloud Infrastructure (OCI) Security with cnspec](/cnspec/cloud/oci/).

### Examples: SaaS

#### Query GitHub

```bash
export GITHUB_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN
cnspec shell github repo ORG/REPO
```

To learn more, read [Assess GitHub Security with cnspec](/cnspec/saas/github/).

#### Query Google Workspace

```bash
export GOOGLEWORKSPACE_CLOUD_KEYFILE_JSON=/home/user/my-project-6646123456789.json
cnspec shell google-workspace --customer-id 5amp13iD --impersonated-user-email admin@domain.com
```

To learn more, read [Assess Google Workspace Security with cnspec](/cnspec/saas/google_workspace/).

#### Query Microsoft 365 (M365)

```bash
cnspec shell ms365 --certificate-path certificate.combo.pem --tenant-id YOUR_TENANT_ID --client-id YOUR_CLIENT_ID
```

To learn more, read [Assess Microsoft 365 Security with cnspec](/cnspec/saas/m365/).

#### Query Okta

```bash
cnspec shell okta --organization your_org.okta.com --token API_TOKEN
```

To learn more, read [Assess Okta Security with cnspec](/cnspec/saas/okta/).

#### Query Slack

```bash
cnspec shell slack --token API_TOKEN
```

To learn more, read [Assess Slack Security with cnspec](/cnspec/saas/slack/).

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
