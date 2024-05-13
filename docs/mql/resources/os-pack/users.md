---
title: users
id: users
sidebar_label: users
displayed_sidebar: MQL
description: Users configured on this system
---

# users

**Description**

Users configured on this system

**List**

[]user

**Fields**

| ID   | TYPE                      | DESCRIPTION |
| ---- | ------------------------- | ----------- |
| list | &#91;&#93;[user](user.md) |             |

**Examples**

Display all users and their UID

```coffeescript
users.list { uid name }
```

Ensure user exists

```coffeescript
users.one( name == 'root')
```

Ensure user does not exist

```coffeescript
users.none(name == 'vagrant')
```

Search for a specific SID and check for its values

```coffeescript
users.where( sid == /S-1-5-21-\d+-\d+-\d+-501/ ).list {
  name != "Guest"
}
```
