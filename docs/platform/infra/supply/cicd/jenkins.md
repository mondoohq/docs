---
title: Scan in Jenkins
sidebar_label: Jenkins
sidebar_position: 6
description: This page details how to integrate Mondoo with Jenkins.
image: /img/featured_img/mondoo-jenkins.jpg
---

Integrate Mondoo security with [Open Source Jenkins](https://jenkins.io/) and [CloudBees CI](https://www.cloudbees.com/jenkins) to scan Kubernetes manifests, Terraform configuration files, and Docker images for common misconfigurations and CVEs.

## Configure Jenkins security

To set up a Jenkins integration with Mondoo:

- Create Mondoo credentials

- Store those credentials in Jenkins

### Create credentials in Mondoo

To fetch policies and send scan results to Mondoo Platform, first configure a Mondoo service account for use in your CI/CD pipeline:

1. In the [Mondoo Console](https://console.mondoo.com) side navigation bar, under **INTEGRATIONS**, select **Add New Integration**.

2. Under **CI/CD**, select **Jenkins**.

3. Copy the value in the **Copy the Mondoo Platform credentials** box to use it as a variable in your pipeline.

4. Select the **START SCANNING** button.

The credential is a base64-encrypted code that contains all the information needed to send the results of the scan to Mondoo. You can decrypt and check the content easily using this command:

```bash
echo <Credentials> | base64 -d
```

### Securely store credentials in Jenkins

Configure Jenkins to store the credentials for cnspec in the `MONDOO_CONFIG_BASE64` environmental variable.

![Paste the configuration as GCP substitution variable](/img/platform/infra/jenkins/mondoo-cicd-jenkins-credentials.png)

## Example configuration

```jdp title="Jenkinsfile.jdp"
pipeline {
      environment {
        REGISTRY = "jenkins-docker-example"
      }
      agent any
      stages {
        stage('Cloning Git Repository') {
          steps {
            // be sure to change this to your project repository
            git 'https://github.com/lunalectric/backend.git'
          }
        }
        stage('Building image') {
          steps{
            script {
              dockerImage = docker.build("${REGISTRY}:${env.BUILD_ID}")
            }
          }
        }
        stage('Scan image') {
          environment {
            MONDOO_CONFIG_BASE64 = credentials('MONDOO_CONFIG_BASE64')
          }
          steps{
            sh 'bash -c "$(curl -sSL https://install.mondoo.com/sh)"'
            sh './cnspec version'
            // be sure to change the score-threshold value to control the minimum accepted asset score before CI jobs fail
            sh "./cnspec scan docker ${REGISTRY}:${env.BUILD_ID} --score-threshold 90"
          }
        }
        stage('Deploy Image') {
          // For a Docker Registry which requires authentication,
          // add a "Username/Password" Credentials intro-item from the Jenkins home page and use the
          // Credentials ID as a second argument to withRegistry():
          environment {
            REGISTRY_CREDS = credentials('REGISTRY_CREDS')
          }
          steps{
            script {
              docker.withRegistry( '', REGISTRY_CREDS ) {
                dockerImage.push()
              }
            }
          }
        }
        stage('Remove Unused docker image') {
          steps{
            sh "docker rmi ${REGISTRY}:${env.BUILD_ID}"
          }
        }
      }
    }
```

You can view the results directly in the Jenkins UI or in the Mondoo CI/CD view.

![Run a mondoo scan in Jenkins](/img/platform/infra/jenkins/mondoo-cicd-jenkins-result-text.png)

---
