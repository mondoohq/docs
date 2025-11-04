---
title: cisco.nxos.passphraseTimevalues
id: cisco.nxos.passphraseTimevalues
sidebar_label: cisco.nxos.passphraseTimevalues
displayed_sidebar: MQL
---

# cisco.nxos.passphraseTimevalues

**Fields**

| ID              | TYPE   | DESCRIPTION                                                                           |
| --------------- | ------ | ------------------------------------------------------------------------------------- |
| user            | string | Username this configuration applies to (empty if this is the global defaults config). |
| warningTimeUnit | string | The Warning time before passphrase expiration units(normally `days`).                 |
| warningTime     | int    | The Warning time before passphrase expiration value.                                  |
| graceTimeUnit   | string | The Grace time before passphrase expiration units(normally `days`).                   |
| graceTime       | int    | The Grace time before passphrase expiration value.                                    |
| lifeTimeUnit    | string | The Lifetime units(normally `days`).                                                  |
| lifeTime        | int    | The Lifetime value.                                                                   |
