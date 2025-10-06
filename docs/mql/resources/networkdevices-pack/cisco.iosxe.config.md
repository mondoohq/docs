---
title: cisco.iosxe.config
id: cisco.iosxe.config
sidebar_label: cisco.iosxe.config
displayed_sidebar: MQL
description: Cisco IOS XE Global configuration settings
---

# cisco.iosxe.config

**Description**

Cisco IOS XE Global configuration settings

**Fields**

| ID                               | TYPE                                                                | DESCRIPTION                                                                              |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------ |
| enablePassword                   | [cisco.iosxe.passwordEncryption](cisco.iosxe.passwordencryption.md) | The enable password configuration. Obtained by running 'show running-config              | include enable password'.            |
| enableSecret                     | [cisco.iosxe.passwordEncryption](cisco.iosxe.passwordencryption.md) | The enable secret configuration. Obtained by running 'show running-config                | include enable secret'.              |
| servicePasswordEncryptionEnabled | bool                                                                | Whether service password-encryption is enabled. Obtained by running 'show running-config | include service password-encryption' |
| execBanner                       | string                                                              | The exec banner, obtained by running 'show running-config                                | beg banner exec'                     |
| motdBanner                       | string                                                              | The message of the day banner, obtained by running 'show running-config                  | beg banner motd'                     |
| loginBanner                      | string                                                              | The login banner, obtained by running 'show running-config                               | beg banner login'                    |
