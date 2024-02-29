---
title: okta.domain
id: okta.domain
sidebar_label: okta.domain
displayed_sidebar: MQL
description: Okta domain
---

# okta.domain

**Description**

Okta domain

**Fields**

| ID                | TYPE           | DESCRIPTION                                                            |
| ----------------- | -------------- | ---------------------------------------------------------------------- |
| id                | string         | Domain ID                                                              |
| domain            | string         | Domain name                                                            |
| validationStatus  | string         | Status of the domain: NOT_STARTED, IN_PROGRESS, VERIFIED, or COMPLETED |
| dnsRecords        | &#91;&#93;dict | TXT and CNAME records to be registered for the domain                  |
| publicCertificate | dict           | Certificate metadata for the domain                                    |
