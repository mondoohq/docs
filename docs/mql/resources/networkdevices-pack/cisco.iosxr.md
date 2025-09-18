---
title: cisco.iosxr
id: cisco.iosxr
sidebar_label: cisco.iosxr
displayed_sidebar: MQL
description: Cisco IOS XR
---

# cisco.iosxr

**Description**

Cisco IOS XR

**Fields**

| ID                     | TYPE                                                                                            | DESCRIPTION                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------- |
| hostname               | string                                                                                          | Hostname of the device                                                                                       |
| interfaces             | &#91;&#93;[cisco.iosxr.interface](cisco.iosxr.interface.md)                                     | Interfaces                                                                                                   |
| ntp                    | [cisco.iosxr.ntpEntry](cisco.iosxr.ntpentry.md)                                                 | ntp configuration                                                                                            |
| ssh                    | [cisco.iosxr.sshConfig](cisco.iosxr.sshconfig.md)                                               | ssh configuration, Command: `show running-config ssh`                                                        |
| banner                 | &#91;&#93;[cisco.iosxr.bannerEntry](cisco.iosxr.bannerentry.md)                                 | Banner configuration, Command: `show running-config banner`                                                  |
| type6                  | [cisco.iosxr.type6serverConfig](cisco.iosxr.type6serverconfig.md)                               | Type 6 password encryption server configuration                                                              |
| users                  | &#91;&#93;[cisco.iosxr.user](cisco.iosxr.user.md)                                               | usernames and role, password, and encryption level for each, Command: `show running-config username`         |
| logging                | [cisco.iosxr.loggingConfig](cisco.iosxr.loggingconfig.md)                                       | Logging configuration, Command: `show logging`                                                               |
| runLogging             | [cisco.iosxr.runLoggingConfig](cisco.iosxr.runloggingconfig.md)                                 | Running Config Logging Configuration, Command: `show running-config logging`                                 |
| runLoggingSyslogHosts  | &#91;&#93;[cisco.iosxr.runLoggingSyslogHost](cisco.iosxr.runloggingsysloghost.md)               | Running Config Logging Configuration (Syslog hosts slice), Command: `show running-config logging`            |
| passwordPolicies       | &#91;&#93;[cisco.iosxr.passwordPolicy](cisco.iosxr.passwordpolicy.md)                           | Password policies, Command: `show running-config aaa password-policy`                                        |
| smallServers           | &#91;&#93;[cisco.iosxr.smallServer](cisco.iosxr.smallserver.md)                                 | Small servers configuration, Command: `show running-config                                                   | include small`                    |
| lineAuthentication     | &#91;&#93;[cisco.iosxr.lineAuthenticationEntry](cisco.iosxr.lineauthenticationentry.md)         | Line authentication configuration, Command: `show running-config formal                                      | include login authentication`     |
| lineAccounting         | &#91;&#93;[cisco.iosxr.lineAccountingEntry](cisco.iosxr.lineaccountingentry.md)                 | Line accounting configuration, Command: `show running-config formal                                          | include accounting                | include line` |
| aaaAuthenticationLogin | &#91;&#93;[cisco.iosxr.aaaAuthenticationLoginEntry](cisco.iosxr.aaaauthenticationloginentry.md) | AAA authentication login configuration, Command: `show running-config formal                                 | include aaa authentication login` |
| aaaGroupServer         | &#91;&#93;[cisco.iosxr.aaaGroupServerEntry](cisco.iosxr.aaagroupserverentry.md)                 | AAA group server configuration, Command: `show running-config formal                                         | include aaa group server`         |
| vtyLines               | &#91;&#93;[cisco.iosxr.vtyLinesEntry](cisco.iosxr.vtylinesentry.md)                             | VTY lines, Command: `show running-config formal                                                              | include vty-pool`                 |
| aaaAccounting          | &#91;&#93;[cisco.iosxr.aaaAccountingEntry](cisco.iosxr.aaaaccountingentry.md)                   | AAA accounting configuration, Command: `show running-config aaa accounting`                                  |
| runSnmpCommunities     | &#91;&#93;[cisco.iosxr.runSnmpCommunitiesEntry](cisco.iosxr.runsnmpcommunitiesentry.md)         | Running Config SNMP Community Strings, Command: `show running-config snmp-server                             | include snmp-server community`    |
| runSnmpHosts           | &#91;&#93;[cisco.iosxr.runSnmpHostsEntry](cisco.iosxr.runsnmphostsentry.md)                     | Running Config SNMP Host Strings, Command: `show running-config                                              | include snmp-server host`         |
| runConsoleExecTimeout  | [cisco.iosxr.runConsoleExecTimeoutEntry](cisco.iosxr.runconsoleexectimeoutentry.md)             | Running Config Console exec-timeout, Command: `show running-config formal                                    | include console exec-timeout`     |
| runAaaTacacsHosts      | &#91;&#93;[cisco.iosxr.aaaTacacsHostEntry](cisco.iosxr.aaatacacshostentry.md)                   | Running Config AAA TACACS+ Hosts, Command: `show running-config aaa` (only the tacacs+ hosts part is parsed) |
| routerPublicKey        | [cisco.iosxr.cryptoKeyRsa](cisco.iosxr.cryptokeyrsa.md)                                         | Router public key, Command: `show crypto key mypubkey rsa`                                                   |
| cdp                    | [cisco.iosxr.cdpConf](cisco.iosxr.cdpconf.md)                                                   | CDP configuration, Command: `show cdp`                                                                       |
| runSshVrfAccessLists   | &#91;&#93;[cisco.iosxr.runSshVrfAccessListEntry](cisco.iosxr.runsshvrfaccesslistentry.md)       | Running Config SSH VRF access-lists, Command: `show running-config formal                                    | include ssh.\*access-list`        |
