---
title: cisco.iosxe.loggingConfiguration
id: cisco.iosxe.loggingConfiguration
sidebar_label: cisco.iosxe.loggingConfiguration
displayed_sidebar: MQL
description: Cisco IOS XE Logging configuration
---

# cisco.iosxe.loggingConfiguration

**Description**

Cisco IOS XE Logging configuration

**Fields**

| ID                                 | TYPE                                                                                                              | DESCRIPTION                                                                                           |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| configurationChangesLoggingEnabled | bool                                                                                                              | Whether logging is enabled for changes in configuration.                                              |
| logSuccessfulLogin                 | bool                                                                                                              | Whether successful logins are logged.                                                                 |
| logUnsuccessfulLogin               | bool                                                                                                              | Whether unsuccessful logins are logged.                                                               |
| bufferSize                         | int                                                                                                               | Optional. The size of the logging buffer in bytes if buffering is enabled.                            |
| bufferDiscriminator                | string                                                                                                            | Optional. The name of the logging discriminator used by the log buffer if configured.                 |
| bufferSeverity                     | string                                                                                                            | Optional. The severity level for the log buffer if configured.                                        |
| consoleSeverity                    | string                                                                                                            | Optional. The severity level for the console log if configured.                                       |
| trapSeverity                       | string                                                                                                            | Optional. The severity level for the trap log if configured.                                          |
| hosts                              | &#91;&#93;[cisco.iosxe.loggingConfiguration.host](cisco.iosxe.loggingconfiguration.host.md)                       | A list of remote hosts configured on the device to which system and debug logs are sent.              |
| sourceInterfaces                   | &#91;&#93;[cisco.iosxe.loggingConfiguration.sourceInterface](cisco.iosxe.loggingconfiguration.sourceinterface.md) | A list of source interfaces configured on the device as the source address of system logging packets. |

