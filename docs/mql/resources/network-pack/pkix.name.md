---
title: pkix.name
id: pkix.name
sidebar_label: pkix.name
displayed_sidebar: MQL
description: x509 certificate PKIX name
---

# pkix.name

**Description**

x509 certificate PKIX name

**Fields**

| ID                 | TYPE              | DESCRIPTION                  |
| ------------------ | ----------------- | ---------------------------- |
| id                 | string            | ID                           |
| dn                 | string            | Distinguished name qualifier |
| serialNumber       | string            | Serial number                |
| commonName         | string            | Common name                  |
| country            | &#91;&#93;string  | Country                      |
| organization       | &#91;&#93;string  | Organization                 |
| organizationalUnit | &#91;&#93;string  | Organizational unit          |
| locality           | &#91;&#93;string  |                              |
| province           | &#91;&#93;string  | State or province            |
| streetAddress      | &#91;&#93;string  | Street address               |
| postalCode         | &#91;&#93;string  | Postal code                  |
| names              | map[string]string |                              |
| extraNames         | map[string]string |                              |
