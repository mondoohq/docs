---
title: Scan in CircleCI Projects
sidebar_label: CircleCI
sidebar_position: 3
description: This page details how to integrate Mondoo with CircleCI.
image: /img/featured_img/mondoo-circleci.jpg
---

Integrate Mondoo security with your CircleCI projects to scan Kubernetes manifests, Terraform configuration files, and Docker images for common misconfigurations and CVEs.

## Configure CircleCI security

To set up a CircleCI integration with Mondoo:

- Create Mondoo credentials

- Store those credentials in CircleCI

### Create credentials in Mondoo

To fetch policies and send scan results to Mondoo Platform, first configure a Mondoo service account for use in your CI/CD pipeline:

1. In the [Mondoo Console](https://console.mondoo.com) side navigation bar, under **INTEGRATIONS**, select **Add New Integration**.

2. Under **CI/CD**, select **CircleCI**.

3. Copy the value in the **Copy the Mondoo Platform credentials** box to use it as a variable in your pipeline.

4. Select the **START SCANNING** button.

The credential is a base64-encrypted code that contains all the information needed to send the results of the scan to Mondoo. You can decrypt and check the content easily using this command:

```bash
echo <Credentials> | base64 -d
```

### Securely store credentials in CircleCI

Configure your CircleCI project to store the credentials for cnspec:

1. On your CircleCI project dashboard, select the **Project Settings** button.

   ![CircleCI project dashboard](/img/platform/infra/circleci/dash.png)

2. In the left navigation, select **Environment Variables**.

3. Select the **Add Environment Variable** button.

4. Name the variable and then, in the **Value** box, paste the credentials you copied in the steps above.

   ![Mondoo credentials in a CircleCI environment variable](/img/platform/infra/circleci/environment-variable.png)

5. Select the **Add Environment Variable** button.

## Example configuration

This example lets you build Docker images as part of your [CI/CD pipeline](https://circleci.com/docs/building-docker-images/). You can use cnspec to verify the Docker image before you push it to the registry. This configuration runs a `docker build` and a `cnspec scan`:

```yml title=".circleci/config.yml"
version: 2.1
  jobs:
    build:
      docker:
        - image: cimg/base:stable
      steps:
        - setup_remote_docker
        - checkout
        - run:
            name: Install cnspec
            command: |
              bash -c "$(curl -sSL https://install.mondoo.com/sh)"
              ./cnspec version
        # - run: docker login -u $DOCKER_USER -p $DOCKER_PASS
        - run: docker build -t yourorg/docker-image:0.1.$CIRCLE_BUILD_NUM .
        # be sure to change the risk-threshold value to control the maximum accepted asset score before CI jobs fail
        - run: ./cnspec scan docker yourorg/docker-image:0.1.$CIRCLE_BUILD_NUM --risk-threshold 90
        # - run: docker push docker yourorg/docker-image:0.1.$CIRCLE_BUILD_NUM
```

You can view the results directly in the CircleCI job or in the Mondoo CI/CD view.

![Run a mondoo scan in CircleCI](/img/platform/infra/circleci/mondoo-cicd-circleci-result-text.png)

---
