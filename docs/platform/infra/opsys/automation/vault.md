---
title: Secrets Management
sidebar_label: Secrets Management
sidebar_position: 5
description: Learn how you can use secrets managers such as HashiCorp Vault, Google Cloud Secrets Manager, and AWS Secrets Manager with Mondoo.
image: /img/featured_img/mondoo-feature.jpg
---

In order to facilitate SSH scanning to a fleet of instances, Mondoo integrates with several vault systems:

- AWS Secrets Manager
- AWS SSM Parameter Store
- Google Cloud Secrets Manager
- HashiCorp Vault
- macOS Keychain
- Windows credential store
- SystemD Secret Service
- Encrypted File

### HashiCorp Vault

Write a secret to the Create vault secret:

```bash
vault kv put secret/vcenter/mondoo-read password="< password >" type="password" user="mondoo-read@vsphere.local"
```

Create an inventory yaml file with HashiCorp Vault:

```yaml title="inventory.yml"
apiVersion: v1
kind: Inventory
metadata:
  name: mondoo-inventory
  labels:
    environment: production
spec:
  assets:
    - name:
      connections:
        - type: vsphere
          host: < ip of the ESXi or vCenter >
          insecure: true
          credentials:
            - secret_id: vcenter/mondoo-read
          discover:
            targets:
              - auto
      annotations:
        Owner: patrick@mondoo.com
  vault:
    name: cnspec-hashivault
    type: hashicorp-vault
    options:
      url: < Url to vault >
      token: < Token >
```

### Encrypted file

Configure cnspec's vault to use the keyring `cnspec-client-vault` for secrets:

```bash
cnspec vault configure mondoo-client-vault --type encrypted-file --option=password='changeme' --option path='/etc/opt/mondoo/vault.enc'
```

This outputs the following configuration:

```yaml
spec:
  vault:
    name: mondoo-client-vault
    options:
      password: changeme
      path: /etc/opt/mondoo/vault.enc
    type: encrypted-file
```

Create an inventory yaml file with Linux Vault:

```yaml title=/etc/opt/mondoo/inventory.yml
apiVersion: v1
kind: Inventory
metadata:
  name: cnspec-inventory
  labels:
    environment: production
spec:
  assets:
    - name:
      connections:
        - type: vsphere
          host: < ip of the ESXi or vCenter >
          insecure: true
          credentials:
            - secret_id: vcenter
          discover:
            targets:
              - auto
  vault:
    name: mondoo-client-vault
    options:
      password: changeme
      path: /etc/opt/mondoo/vault.enc
    type: encrypted-file
```

Add a secret for a VMware vSphere API to the encrypted file vault:

```bash
sudo cnspec vault add-secret vcenter '{ "type": "password",   "user": "chris@vsphere.local", "password": "password" }' --inventory-file /etc/opt/mondoo/inventory.yml
```
