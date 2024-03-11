---
title: Assess the configuration of GitLab organizations and repositories with cnspec
sidebar_label: GitLab
sidebar_position: 3
displayed_sidebar: cnspec
description: Secure and enforce policy for GitLab
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnspec to ensure your GitLab groups and projects follow recommended security and operational best practices.

## Give cnspec access using a GitLab personal access token

To scan GitLab groups and projects, cnspec needs access. You give cnspec the access it needs through the GitLab API. First, you create GitLab personal access token. Then you provide that token with cnspec commands. The token's level of access determines how much information cnspec can retrieve.

To learn how to create a personal access token, read [Personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) in the GitLab documentation.

## Scan GitLab groups and projects

To scan the configuration of a GitLab group, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME> --token <YOUR_TOKEN>
```

To scan all the groups you have access to, run this command:

```bash
cnspec scan gitlab --discover projects --token <YOUR_TOKEN>
```

To scan a project, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME> --project <PROJECT_NAME> --token <YOUR_TOKEN>
```

To scan all projects in a group, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME> --discover projects --token <YOUR_TOKEN>
```

To scan all Terraform files in all the projects discovered in all the groups you have access to, run this command:

```bash
cnspec scan gitlab --discover terraform --token <YOUR_TOKEN>
```

## Example checks

Run `cnspec shell --token <YOUR_TOKEN>` to open the cnspec interactive shell. From there you can make checks like the examples below.

Ensure group email notifications are disabled for a GitLab group:

```coffee
cnspec> gitlab.group.emailsDisabled
[failed] gitlab.group.emailsDisabled
  expected: == true
  actual:   false
```

Ensure the GitLab group is private:

```coffee
cnspec> gitlab.group.visibility=="private"
[ok] value: "private"
```

## Learn more

- To learn about all the GitLab resources and properties, read the [Mondoo GitLab Resource Pack Reference](/mql/resources/gitlab-pack/).

- To learn how to write checks, read [Write Effective MQL](/mql/mql.write).

---
