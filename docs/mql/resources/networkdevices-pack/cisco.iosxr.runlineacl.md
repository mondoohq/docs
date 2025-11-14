---
title: cisco.iosxr.runLineAcl
id: cisco.iosxr.runLineAcl
sidebar_label: cisco.iosxr.runLineAcl
displayed_sidebar: MQL
description: Running Config Line ACL
---

# cisco.iosxr.runLineAcl

**Description**

Running Config Line ACL

**Init**

cisco.iosxr.runLineAcl(lineTemplate string)

**Fields**

| ID           | TYPE                                                                    | DESCRIPTION                                        |
| ------------ | ----------------------------------------------------------------------- | -------------------------------------------------- |
| lineTemplate | string                                                                  | Line template name (e.g. default, ssh-only-config) |
| acl          | &#91;&#93;[cisco.iosxr.runLineAclEntry](cisco.iosxr.runlineaclentry.md) | ACL applied to the line                            |
