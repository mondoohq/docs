---
title: arista.eos
id: arista.eos
sidebar_label: arista.eos
displayed_sidebar: MQL
description: Arista EOS resource
---

# arista.eos

**Supported platform**

- arista-eos

**Description**

Arista EOS resource

**Fields**

| ID           | TYPE                                                          | DESCRIPTION                         |
| ------------ | ------------------------------------------------------------- | ----------------------------------- |
| systemConfig | map[string]string                                             | EOS system configuration            |
| ipInterfaces | &#91;&#93;[arista.eos.ipInterface](arista.eos.ipinterface.md) | IP interfaces                       |
| interfaces   | &#91;&#93;[arista.eos.interface](arista.eos.interface.md)     | Details related to interfaces       |
| version      | dict                                                          | Software and hardware versions      |
| hostname     | string                                                        | The system hostname                 |
| fqdn         | string                                                        | The systems fqdn                    |
| users        | &#91;&#93;[arista.eos.user](arista.eos.user.md)               | Local user configuration            |
| roles        | &#91;&#93;[arista.eos.role](arista.eos.role.md)               | All user-defined and built-in roles |
| snmp         | [arista.eos.snmpSetting](arista.eos.snmpsetting.md)           | Details on SNMP operation           |
| ntp          | [arista.eos.ntpSetting](arista.eos.ntpsetting.md)             | Show NTP status                     |

**Examples**

Arista EOS Version

```coffeescript
arista.eos.version
```

Verify that Arista EOS Version is 18.x

```coffeescript
arista.eos.version['version'] == /18\./
```

Display EOS interfaces

```coffeescript
arista.eos.interfaces { name mtu bandwidth status }
```

Display all connected EOS interfaces

```coffeescript
arista.eos.interfaces.where ( status['linkStatus'] == "connected") {  name mtu bandwidth status }
```

EOS Hostname

```coffeescript
arista.eos.hostname
```
