---
title: cloudflare.account
id: cloudflare.account
sidebar_label: cloudflare.account
displayed_sidebar: MQL
description: Cloudflare account
---

# cloudflare.account

**Description**

Cloudflare account

**Fields**

| ID         | TYPE                                                                      | DESCRIPTION                   |
| ---------- | ------------------------------------------------------------------------- | ----------------------------- |
| id         | string                                                                    | Cloudflare account identifier |
| name       | string                                                                    | Account name                  |
| settings   | [cloudflare.account.settings](cloudflare.account.settings.md)             | Settings                      |
| createdOn  | time                                                                      | Time the account was created  |
| liveInputs | &#91;&#93;[cloudflare.streams.liveInput](cloudflare.streams.liveinput.md) | Live inputs                   |
| videos     | &#91;&#93;[cloudflare.streams.video](cloudflare.streams.video.md)         | Videos                        |
