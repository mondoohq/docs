---
title: Assess AWS Security from AWS CloudShell
description: Learn how to install and configure cnspec in AWS CloudShell to run security scans against your AWS account.
displayed_sidebar: cnspec
sidebar_label: Assess AWS from CloudShell
sidebar_position: 50
image: /img/featured_img/mondoo-aws.jpg
---

If you prefer to work in AWS's browser-based CloudShell, you don't have to switch to a different interface to scan your AWS infrastructure. You can interact with cnspec within CloudShell.

To learn about CloudShell, read the [AWS documentation](https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html).

## Set up cnspec in CloudShell

### Step 1: Launch the Mondoo AWS CloudShell Setup Guide

![Mondoo AWS Guide - Start](/img/cnspec/aws/aws-guide-start.png)

1. Open the <a href="https://console.mondoo.com/aws-guide" target="_blank">AWS Guide</a>.

2. Select **Let's do this!**

![Mondoo AWS Guide - Choose AWS](/img/cnspec/aws/cs-choose-aws.png)

3. On the **Choose your cloud service** step, select **Amazon AWS** and choose **Next step**.

### Step 2: Launch CloudShell

![Mondoo AWS Guide - Open CloudShell](/img/cnspec/aws/cs-open-cs.png)

1. Select **Open CloudShell** to open AWS CloudShell in a new browser tab.

2. Once CloudShell finishes launching, return to the browser tab containing the **Mondoo AWS Guide**.

3. Select **Next step**.

### Step 3: Install cnspec in CloudShell and register with Mondoo Platform

![AWS Setup Guide - Copy Token](/img/cnspec/aws/cs-token.png)

1. This next step contains a temporary registration token and a one-line install script to install cnspec in CloudShell. Select the copy icon in the command window, and then select **Continue**.

2. Return to the browser tab with AWS CloudShell and paste the contents of the clipboard with the installation command.

3. When you paste the command, AWS CloudShell shows a warning about external code. Select **Paste**

4. Press **Enter** to install cnspec.

:::info

The cnspec install script is open source. You can find it in Mondoo's [GitHub organization](https://github.com/mondoohq/installer)

:::

## Step 4: Scan

The `cnspec scan` command checks your assets against policies. `cnspec scan aws` executes policies against your aws account.

:::tip

cnspec provides a `--help` command. For instance, `cnspec scan --help` returns detailed information on using cnspec to scan various assets.

:::

### How AWS scans work

When an AWS CloudShell session starts, cnspec relies on your AWS credentials (which you used to log into the AWS console) to run policies against the account. This pre-authentication lets you skip configuring credentials for AWS services with cnspec.

By running `cnspec scan aws`, cnspec authenticates with Mondoo Platform to find the policies configured for AWS in your account. After syncing policies, cnspec authenticates against the AWS API using the configured credentials in AWS CloudShell and then runs the policies against your account.

:::info

Mondoo Platform comes with a default set of policies activated in the registry to get you started.

:::

### Scan AWS from CloudShell

1. Open the Mondoo AWS Setup Guide where you left off in your browser and copy the `cnspec scan aws` command to your clipboard.

```bash
cnspec scan aws
```

2. Paste the `cnspec scan aws` command into AWS CloudShell and press **Enter** to start the scan.

The scan takes only a few minutes to complete.

After the scan completes, cnspec returns the results to `STDOUT`and also sends the scan results to the Mondoo Platform. To view results:

1. Return to the browser tab containing the **Mondoo AWS Guide** and select **Next Step**. Mondoo Platform locates the results from the AWS scan.

2. Select **Explore Mondoo** to see the results from the scan.

---
