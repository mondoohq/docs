---
title: aws.dms
id: aws.dms
sidebar_label: aws.dms
displayed_sidebar: MQL
description: AWS Database Migration Service (DMS)
---

# aws.dms

**Supported platform**

- aws

**Description**

AWS Database Migration Service (DMS)

Use the `aws.dms` resource to assess the configuration of the AWS Database Migration service.

**Fields**

| ID                   | TYPE           | DESCRIPTION                       |
| -------------------- | -------------- | --------------------------------- |
| replicationInstances | &#91;&#93;dict | List of DMS replication instances |

**Examples**

Return a list of AWS Database Migration service replication instances

```coffeescript
aws.dms.replicationInstances
```

Check whether AWS Database Migration Service replication instances are public

```coffeescript
aws.dms.replicationInstances.none(
  _['PubliclyAccessible'] == true
)
```

**References**

- [Security in AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html)
