---
title: Overview of MQL Built-In Functions
sidebar_label: Overview
sidebar_position: 1
description: Learn how to use MQL built-in functions
image: /img/featured_img/mondoo-feature.jpg
---

# Overview

Built-ins are the core language features that let you filter, transform, and make assertions across collections of data. They are the difference between just retrieving raw data and turning that data into meaningful answers.

Think of built-ins as the verbs of MQL:

- `.where()` narrows down what you’re looking at.
- `.map()` transforms the results.
- `.all()`, `.any()`, `.none()`, `.one()` let you assert truth over collections.
- `.list`, `.length`, and `.containsOnly` help you structure and compare results.

In the following sections we’ll explore each built-in in detail, with examples you can run in the shell. You’ll see both policy-style checks and inventory-style queries so you can use them in compliance scenarios as well as live investigation.

# MQL Built-in Functions

This page gives an overview of all built-in functions available in MQL, grouped by type.
Each function links to a dedicated documentation page with examples.

---

## Array Functions

| Function                                 | Summary                                                |
| ---------------------------------------- | ------------------------------------------------------ |
| [first](./array/first.mdx)               | Return the first element of an array                   |
| [last](./array/last.mdx)                 | Return the last element of an array                    |
| [length](./array/length.mdx)             | Number of elements in the array                        |
| [where](./array/where.mdx)               | Filter by predicate                                    |
| [map](./array/map.mdx)                   | Transform each element                                 |
| [flat](./array/flat.mdx)                 | Flatten nested arrays                                  |
| [sample](./array/sample.mdx)             | Return a random sample of elements                     |
| [duplicates](./array/duplicates.mdx)     | Return duplicate values (optionally by key)            |
| [unique](./array/unique.mdx)             | Return unique values (optionally by key)               |
| [contains](./array/contains.mdx)         | Check if array contains a value or matches predicate   |
| [containsAll](./array/containsAll.mdx)   | Check that array contains all specified values         |
| [containsNone](./array/containsNone.mdx) | Check that array contains none of the specified values |
| [containsOnly](./array/containsOnly.mdx) | Check that array contains only specified values        |
| [all](./array/all.mdx)                   | Assert all elements satisfy predicate                  |
| [any](./array/any.mdx)                   | Assert at least one element satisfies predicate        |
| [one](./array/one.mdx)                   | Assert exactly one element satisfies predicate         |
| [none](./array/none.mdx)                 | Assert no elements satisfy predicate                   |

---

## Map Functions

| Function                       | Summary                                         |
| ------------------------------ | ----------------------------------------------- |
| [length](./map/length.mdx)     | Number of entries in the map                    |
| [keys](./map/keys.mdx)         | Return the keys of the map                      |
| [values](./map/values.mdx)     | Return the values of the map                    |
| [where](./map/where.mdx)       | Filter map entries by predicate                 |
| [sample](./map/sample.mdx)     | Return a random sample of entries               |
| [contains](./map/contains.mdx) | Check if any entry matches a value or predicate |
| [all](./map/all.mdx)           | Assert all entries satisfy predicate            |
| [any](./map/any.mdx)           | Assert at least one entry satisfies predicate   |
| [one](./map/one.mdx)           | Assert exactly one entry satisfies predicate    |
| [none](./map/none.mdx)         | Assert no entry satisfies predicate             |

---

## String Functions

| Function                            | Summary                                               |
| ----------------------------------- | ----------------------------------------------------- |
| [length](./string/length.mdx)       | Number of characters in the string                    |
| [contains](./string/contains.mdx)   | Check if string contains a substring or matches regex |
| [find](./string/find.mdx)           | Find all regex matches in the string                  |
| [in](./string/in.mdx)               | Check if string is in a list                          |
| [notIn](./string/notin.mdx)         | Check if string is not in a list                      |
| [inRange](./string/inrange.mdx)     | Check if string represents a number within a range    |
| [camelcase](./string/camelcase.mdx) | Convert string to camelCase                           |
| [downcase](./string/downcase.mdx)   | Convert string to lowercase                           |
| [upcase](./string/upcase.mdx)       | Convert string to uppercase                           |
| [lines](./string/lines.mdx)         | Split string into lines                               |
| [split](./string/split.mdx)         | Split string by a delimiter                           |
| [trim](./string/trim.mdx)           | Trim whitespace or specified characters               |

---

## Number Functions

| Function                        | Summary                             |
| ------------------------------- | ----------------------------------- |
| [inRange](./number/inrange.mdx) | Check if a number is within a range |

---

| Function                      | Summary                               |
| ----------------------------- | ------------------------------------- |
| [seconds](./time/seconds.mdx) | Extract seconds or convert to seconds |
| [minutes](./time/minutes.mdx) | Extract minutes or convert to minutes |
| [hours](./time/hours.mdx)     | Extract hours or convert to hours     |
| [days](./time/days.mdx)       | Extract days or convert to days       |
| [unix](./time/unix.mdx)       | Convert to Unix epoch seconds         |
| [inRange](./time/inrange.mdx) | Check if time is within a range       |

---

## IP / Network Functions

| Function                                | Summary                                    |
| --------------------------------------- | ------------------------------------------ |
| [address](./ip/address.mdx)             | Return network address of CIDR             |
| [cidr](./ip/cidr.mdx)                   | Return the CIDR block                      |
| [prefix](./ip/prefix.mdx)               | Return the network prefix                  |
| [prefixLength](./ip/prefixlength.mdx)   | Return prefix length                       |
| [subnet](./ip/subnet.mdx)               | Return subnet from CIDR                    |
| [suffix](./ip/suffix.mdx)               | Return suffix (host bits)                  |
| [version](./ip/version.mdx)             | Return IP version (4 or 6)                 |
| [isUnspecified](./ip/isunspecified.mdx) | Check if IP is unspecified (0.0.0.0 or ::) |
| [inRange](./ip/inrange.mdx)             | Check if IP/network is within another      |

---

<!-- ## Version Functions

| Function | Summary |
| -------- | ------- |
| [epoch](./version/epoch.mdx) | Return epoch part of a version |
| [inRange](./version/inrange.mdx) | Check if version satisfies constraints |

---

## Parsing Functions

| Function | Summary |
| -------- | ------- |
| [parse.date](./parse/date.mdx) | Parse a date string by format |
| [parse.duration](./parse/duration.mdx) | Parse a human-readable duration (e.g. `1h30m`) | -->
