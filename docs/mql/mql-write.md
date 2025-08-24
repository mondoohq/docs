---
title: Write Effective MQL
sidebar_label: Write Effective MQL
sidebar_position: 2
displayed_sidebar: MQL
id: mql.write
description: How to write queries, checks, and policies in MQL
image: /img/featured_img/mondoo-feature.jpg
---

The Mondoo Query Language (MQL) is a graph-based, lightweight, and high-performance language, purpose-built for querying infrastructure configuration data and constructing security/compliance policies. It enables intuitive exploration and validation of systems via a declarative, fast syntax.

This page describes the conventions for writing queries and checks in MQL. It contains these sections:

- [Introduction](#introduction)
  - [Installation](#installation)
  - [Alternative usage](#alternative-usage)
- [Basic structure](#basic-structure)
  - [Anatomy of MQL](#anatomy-of-mql)
  - [Commenting](#commenting)
  - [Types](#types)
  - [Schemas](#schemas)
  - [UTF-8 encoding](#utf-8-encoding)
  - [Resources and fields](#resources-and-fields)
  - [Blocks](#blocks)
  - [Lists](#lists)
  - [Basic functions](#basic-functions)
- [Control structures](#control-structures)
  - [If](#if)
  - [Switch](#switch)
  - [Conditional operators](#conditional-operators)
- [Functions](#functions-h2)
  - [Parameters](#parameters)
  - [Anonymous functions](#anonymous-functions)
  - [Named arguments in functions](#named-arguments-in-functions)
- [Data](#data)
  - [Basic data types](#basic-data-types)
    - [Regular expressions](#regular-expressions)
    - [Time](#time)
    - [Empty](#empty)
  - [Arrays](#arrays)
    - [Array assertions](#array-assertions)
    - [Mapping field](#mapping-field)
  - [Maps](#maps)
  - [Dicts](#dicts)
    - [recurse helper for dicts](#recurse-helper-for-dicts)
  - [Nested data](#nested-data)
- [Error handling](#error-handling)
  - [Null chaining](#null-chaining)
- [Concurrency](#concurrency)
- [Embedding](#embedding)
  - [CLI](#cli)
  - [Code embedding](#code-embedding)
- [Additional resources](#additional-resources)

## Introduction

MQL is a query and assertion language for asset inventories and policy as code.

Example 1: You can use it to find all packages with "ssl" in their name on your system and get their name and version:

```coffee
packages.where( name == /ssl/i ) { name version }
```

```
packages.where.list: [
  0: {
    version: "3.5.2-1"
    name: "openssl"
  }
]
```

Example 2: You can use it to write assertions, i.e. checks on your system that have to be true. Here we write a check that makes sure "bob" isn't a user on the system (sorry Bob):

```coffee
users.none( name == "bob" )
```

```
[ok] value: true
```

### Installation

For most audiencdes we recommend to install [cnspec](https://github.com/mondoohq/cnspec) as outlined on the website. Cnspec is a utility for creating and executing MQL policies and offers a way to scale your security and policy efforts.

Once you have it installed, you can either run the above check in your shell like this:

```bash
cnspec run -c "packages.where( name == /ssl/i ) { name version }"
```

```
→ Connecting to your local system. To learn how to scan other platforms, use the --help flag.
→ no Mondoo configuration file provided, using defaults
packages.where.list: [
  0: {
    version: "3.5.2-1"
    name: "openssl"
  }
]
```

Or you can open the interactive shell on your system and paste the check right in there:

```
cnspec shell
```

This will open:

```bash
→ Connecting to your local system. To learn how to scan other platforms, use the --help flag.
→ no Mondoo configuration file provided, using defaults
→ connected to Arch Linux
  ___ _ __  ___ _ __   ___  ___
 / __| '_ \/ __| '_ \ / _ \/ __|
| (__| | | \__ \ |_) |  __/ (__
 \___|_| |_|___/ .__/ \___|\___|
   mondoo™     |_|
cnspec>
```

Now you can just paste the check as listed above:

```coffee
packages.where( name == /ssl/i ) { name version }
```

```
packages.where.list: [
  0: {
    version: "3.5.2-1"
    name: "openssl"
  }
]
```

In both cases we are connected to your local operating systems and running the commands on it in cnspec.

As you can see, you can run commands in `cnspec` using either `run` for immediate CLI output or via `shell` for an interactive shell.

For the rest of this guide we will use MQL queries without referencing specific commands like `cnspec shell`. You can run these MQL queries in whichever way you prefer. For new users the shell is often easiest to learn because it provides interactive feedback.

### Alternative usage

There are a few alternatives to using MQL: cnquery, cnspec policies and embedded MQL.

**cnquery**

The easiest substitution to the above examples is [cnquery](https://github.com/mondoohq/cnquery). It contains the MQL language, provides connectivity through providers, and offers Querypacks. It is the foundation that cnspec is bulit on. As such, you can run the examples in this guide on cnquery as well. For example:

```bash
cnquery run -c "packages.where( name == /ssl/i ) { name version }"
```

**MQL policies**

Next are MQL policies in cnspec. This are built around MQL queries and assertions (i.e. the core of this guide) but add a full policy structure around it. This means you get things like titles, authors, versions, remediation guidance, references and much more. You can find more in the [policy guide](http://localhost:3000/docs/cnspec/cnspec-policies/write/).

We recommend you explore policies after you understand the MQL basics in this page.

**Embedded MQL**

Finally there is embedding MQL into your own stack. At the time of writing we support embedding the Go-based MQL runtime. It is found in [cnquery](https://github.com/mondoohq/cnquery) and can be used as a standalone solution. Please [ping us](https://github.com/orgs/mondoohq/discussions) in discussions if you are interested in embedding MQL and we will share the guide.


## Basic structure

MQL is a type-safe, compiled language that is inspired by marrying GraphQL with a lightweight scripting.

- It has base types like string, number, boolean, array, map, and resource. Types are explaind in the [types](#types) section below.
- It is compiled to make sure your code is going to work at runtime. Often you don't even realize it uses compiled code because it can execute MQL on the fly.
- GraphQL inspired the way we extract data through blocks (as seen below)
- We mixed lightweight scripting into it which allows us to transform data and write assertions

### Anatomy of MQL

MQL queries are often short code snippets that either extract data or contain an assertion. Here is an exammple:

![MQL Anatomy](/img/mql/mql-structure.png)

- **Resource**: An object containing information about a component in your infrastructure or code. In this example we use the `packages` resource to access the operating system's list of packages. See more [below](#resources-and-fields)
- **Functions**: These are calls that accomplish some kind of task. In this example we use `where` to filter the list of packages.
- **Function call**: Is attached to a function to specify arguments. Here we use a filter in the argument that will only pick packages whose name matches the regular expression.
- **Fields**: Contain pieces of information about a resource. Here we use the `name` field of each package both in the `where` filter and in the block call at the end, along with the `version` field.
- **Value**: Fixed values are often used in MQL for filtering, data processing, and assertions. For example, the `/ssl/i` value is a regular expression that will be matched against the name of each package. The suffix `i` on the regular expression indicates that it is case-insensitive, i.e. it will match both "SSL" and "ssl" or "sSl".
- **Block**: The last element are the GraphQL-inspired block calls for accessing and extracting data. Everything up to the block is an array of packages that have been filtered. The block tells us to get us the name and version of each package in this list. You will learn more in the [blocks](#blocks) section below.

### Comments

MQL supports comments via `#`, because it works really well inside of YAML policies and querypacks.

```coffee
"hi" # I am a comment
```

We also support comments via `//` if you prefer.

### Types

MQL comes with a set of core types:

- **String**: A normal string like `"Hello!"
- **Number**: Can represent an integer like `123` or a float like `1.23`
- **Bool**: For `true` and `false`
- **Regex**: For matching regular expressions like `/my.*re/i`
- **Array**: A list of values like `[1,2,3]`
- **Map**: A key-value pair like `{a: 23}`
- **Time**: To reprersent time like `time.now` or `time.today`
- **Version**: Often used for software and package versions like `version("1.2.3-rc1")`
- **IP**: For IP addresses, supporting IPv4 `ip("1.2.3.4/24")` and IPv6 `ip("2001:db8::1")`

There are also a few special keywords and types:

- **Null**: Is reserved for the `null` value when something isn't set
- **Empty**: Can be used to check if something is empty (e.g. empty arrays, empty strings, empty maps, or null values)

Finally there is one special type we track for representing JSON data. Since we don't know the exact type information of JSON at compile-time we created a type to interact with data that is restricted to the primitive types that JSON supports. You will run into it when you access JSON files via e.g. `parse.json("my.json").params`.

### Schemas

The previous section covered builtin types. Most often, however, MQL is used to interact with IT systems in your environments. These are accessed via a structured data graph that exposes all the information.

If you havea been following these examples, you have already used one such schema: The OS schema. When you `cnspec shell` without additional arguments you are using the `os` provider to connect to your local system.

**Providers** expose all types of systems to your MQL queries. They populate your MQL namespace with keywords that allow you to interact with your system.

For example, if you are connected to your local OS, you can use resources like:

```
users
packages
services
```

However, if you connect to a cloud environment like AWS, Azure, or Google Cloud you get different keywords like:

```
aw2.ec2.instances
```

To learn more about what providers are available and what resouruces they contain check out [our reference page](../../mql/resources/#resources). To learn more about managing providers, check out [this guide](../../cnspec/cnspec-adv-install/providers/).

### UTF-8 encoding

All MQL code is encoded in UTF-8 to support arbitrary characters from other languages, symbols, or even emojis:

```coffee
"UTF-8 in 日本 and 中文 👍".find(regex.emoji)
```

```
find: [
  0: "👍"
]
```

### Resources and fields

A _resource_ is a source of information about an asset in your infrastructure. These are examples of resources:

- A user on the asset
- The operating system running on the asset
- An AWS S3 bucket
- A Google Cloud compute instance
- A Terraform state
- A Microsoft Entra ID domain

Each resource has one or more _fields_, pieces of information you can request from the resource. These are examples of fields:

- A user can have a unique ID, a group, an SSH key, and more.
- An operating system can have a name, a path, and more.
- An AWS S3 bucket can have a version, can be public or not public, have encryption information, and more.
- A Google Cloud compute instance can have deletion protection on or off, a hostname, and more.
- A Terraform state can have output values, modules, and more.
- A Microsoft Entra ID domain can have a verified or unverified status, an authentication type, and more.

This example requests the platform of an asset. `asset` is the resource and `platform` is the field:

```coffee
asset.platform
```

The output would be `redhat`, `windows`, `k8s-pod`, or similar.

Access related resources

```coffee
sshd.config.file
=> file("/etc/sshd/sshd_config")

sshd.config.file.path
=> "/etc/sshd/sshd_config"
```

#### Child resources

Some resources have _child resources_. For example, the `aws.ec2` resource has multiple child resources, including `aws.ec2.volume`, `aws.ec2.snapshot`, and more.

### Blocks

_Blocks_ are a convenient way to group and extract information. They save you the trouble of repeating multiple requests for fields from one resource.

Instead of making individual requests like this:

```coffee
sshd.config.file
sshd.config.params
sshd.config.ciphers
```

You can combine them into a block:

```coffee
sshd.config {
  file
  params
  ciphers
}
```

The output is the same.

:::warning

When writing a check in a policy that you'll execute in the Mondoo Console, you must use helper variables inside blocks. If you don't, Mondoo can't render the check output.

**Incorrect:**

```coffee
command("ip6tables -L") {
  stdout.contains("Chain INPUT (policy DROP)")
  stdout.contains("Chain OUTPUT (policy DROP)")
}
```

**Correct:**

```coffee
command("ip6tables -L") {
  inputPolicyDrop = stdout.contains("Chain INPUT (policy DROP)")
  chainPolicyDrop = stdout.contains("Chain OUTPUT (policy DROP)")
  inputPolicyDrop
  inputPolicyDrop
}
```

This requirement applies only to policies you plan to deploy in the Mondoo Console. If you're writing ad hoc policies or running queries in cnquery or cnspec, you don't need helper variables inside blocks.

:::

#### Nest blocks

You can nest blocks:

```coffee
sshd.config {
  file {
    path
    permissions
  }
}
```

#### Request all fields from a resource

A quick way to request all fields from a resource is by using `{*}`. For example, this requests all fields from the `services` resource:

```coffee
services { * }
```

This expands all _immediate_ fields of the given resource. It does not cascade to list any child resources.

### Lists

Some resources provide information in _lists_. For example, this requests a list of users, a list of packages, and a list of services:

```coffee
users
packages
services
```

Using blocks, you can access specific field values from every item in a list. For example, this requests the `name`, `uid`, and `home` field values for each result in a list of users:

```coffee
users {
  name
  uid
  home
}
```

### Basic functions

These help to take action on resources and fields. Some of the most important functions exist on lists and include `where`, `all`, `none`, and more.

```coffee
users.where( uid >= 1000 ) {
  name
  uid
}
```

To learn more, read [Functions](#functions-h2).

## Control structures

These are the control structures that organize the flow of control in MQL:

- [If](#if)
- [Switch](#switch)
- [Conditional operators](#conditional-operators)

### If

In MQL a simple `if` statement looks like this:

```coffee
if( x > 0 ) {
  return y
}
```

You can also chain statements with `else if` and `else`:

```coffee
if( x > 10 ) {
return 1
} else if( x > 0 ) {
return 0
} else {
return -1
}
```

### Switch

You can more easily chain multiple conditionals together using `switch`:

```coffee
switch( x ) {
case _ > 10:
  return 1
case _ > 0:
  return 0
default:
  return -1
}
```

MQL evaluates the cases from top to bottom until it finds a match. There is no automatic fall-through.

### Conditional operators

MQL supports these conditional operators:

- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`

:::tip

Use `inRange` to check if an integer, float, or dict is in a numeric range. Follow this format:

```coffee
VALUE.inRange(MIN,  MAX)
```

Examples:

```coffee

3.inRange(3, 5)

password.length.inRange(9, 15)
```

:::

Although MQL is type-safe and compiled, it’s also forgiving. You can easily express your assertions without having to fight with the type-safety.

Here’s a simple example:

```coffee
a = 2
b = "2"

a == 2 && b == 2
```

Here’s a real-world example:

```coffee
sshd.config.params["Port"] == 22
```

`params` is a map of strings, so values like `Protocol` and `Port` are strings, even though they look like numbers.

Many conditional operators allow soft comparisons:

```coffee
"2" == 2

"2" == 2.0

"3" > 2

[1] == 1
```

This simplifies the usage of regular expressions as well:

```coffee
"Hello world" == /H.*o/
```

To learn about conditional operators with lists, see [Arrays](#arrays).

To learn about conditional operators with maps, see [Maps](#maps).

## Functions {#functions-h2}

- [Parameters](#parameters)
- [Anonymous functions](#anonymous-functions)

### Parameters

Many fields take unnamed parameters by default:

```coffee
sshd.config( "/path/to/my/sshd" )
```

You can also use named parameters to initialize resources.:

```coffee
parse.json(
  command('lsblk --json').stdout
)
```

### Anonymous functions

You can call many functions with an embedded function. An example is `where`:

```coffee
users.where( uid >= 1000 )
```

The function takes an embedded function as an argument, which is executed against it. The fields (in the above example, `uid`) are by default bound to the calling resource (in the above example, `user`).

You can combine these with global resources and variables:

```coffee
users.where( name == regex.email )
```

Some functions support both embedded and static values:

```coffee
[1,2,3].contains( 3 )
[1,2,3].contains( _ > 2 )
```

### Named arguments in functions

You can set a named argument in a function. This is useful in situations where you can only use one expression (such as with `all` or `one`). It also makes the code easier to understand, especially when nesting across multiple objects, as in this example:

```coffee
users.all(user:
  groups.contains(group:
    user.uid == group.gid
  )
)
```

## Data

Learn about these data types in MQL:

- [Basic data types](#basic-data-types)
- [Maps](#maps)
- [Dicts](#dicts)
- [Empty](#empty)

### Basic data types

MQL's basic data types are:

```coffee
s1 = "I am a string"
s2 = 'I am also a string'
re = /Reg.* Expression/

n1 = 1.0 + 2

n  = null
b  = true || false
```

#### Regular expressions

For regular expressions, you can access a lot of pre-built expressions in the `regex` resource. These are a few examples:

```coffee
"anya@forger.com" == regex.email

"10.0.0.255" == regex.ipv4
"fe80::1042:2c47:b787:f6bb" == regex.ipv6

"4832500902091714" == regex.creditCard
```

To learn about all the pre-build expressions, read the [`regex`](/mql/resources/core-pack/regex/) resource reference.

#### Time

MQL’s built-in time functions make these assertions easy:

```coffee
time.now
# 2022-10-13 14:42:35 -0700 PDT

time.now - time.day
# 2022-10-12 14:42:35 -0700 PDT
# subtracts a day from the current time

time.now - 2*time.hour
# 2022-10-13 11:42:35 -0700 PDT
# subtracts 2 hours from the current time

parse.date("2022-10-12T14:42:35Z")
# 2022-10-12 14:42:35 +0000 UTC
# uses RFC3339 layout by default
```

:::tip

Use `inRange` to check if a date and time is in a range. Follow this format:

```coffee
DATE.inRange(MIN, MAX)
```

Example:

```coffee
time.inRange(yesterday, tomorrow)
```

:::

MQL also can parse durations:

```coffee
parse.duration("3days")

parse.duration("1y")
```

Although the parser is very lenient, for best results, use:

```
30s = 30 seconds
1m = 1 minute
3h = 3 hours
90d = 90 days
5y = 5 years
```

#### Empty

The `empty` data type saves you the trouble of checking for different kinds of empty values, such as:

- `[]`
- `null`
- `''`
- `{}`

For example, this query finds any type of empty value:

```coffee
users.list == empty
```

#### Semantic versioning

Use the `semver` type for semantic versioning. Create a semver using the `semver` keyword, which takes a string as an argument:

```coffee
semver('3.12.1')
```

You can compare a semver with another semver or with a string:

```coffee
semver('1.2.3') < semver('2.3')

semver('1.10') >= '1.2'
```

### Arrays

Many resources contain lists of entries, like this example:

```coffee
users {
  name
  uid
}
```

You can filter these lists using the `where` clause:

```coffee
users.where( uid >= 1000 ) {
  name
  uid
}
```

#### Array assertions

To avoid unnecessary loops, MQL provides some keywords that make assertions on lists a lot simpler. For example:

```coffee
users.all( uid >= 0 )
```

Failures to these print the affected elements:

```coffee
> users.all( uid > 0 )
[failed] users.all()
  actual:   [
	0: user id = user/0/root
  ]
```

The available assertions for all lists are:

```coffee
users.all( name != "anya" )   <= make sure no user is called anya
users.one( name == "anya" )   <= one user must exist, but no more than one
users.none( name == "anya" )  <= no user exists with the name anya
users.contains( uid >= 1000 ) <= contains one or more users with uid >= 1000
```

For lists of strings, you can use the `in` assertion, which is the inverse of `contains`:

```coffee
"anya".in(["abel","amos","anya"])
```

An ideal use for `in` is to combine it with [properties](/cnspec/cnspec-policies/write/properties/). For example, if you define a property named `allowedCiphers`, you can assert that a configured cipher is in that list:

```coffee
sshd.config.ciphers.in( props.allowedCiphers )
```

Another useful assertion for lists of strings is `containsAll`:

```coffee
["abel","amos","anya"].containsAll(["abel","amos"])
```

#### Mapping field

With block extraction, MQL provides arrays of maps:

```coffee
> users { name }
[
  0: { name: "root" }

  ...

]
```

You can map these values into a simple list:

```coffee
> users.map(name)
[
  0: "root",

  ...

]
```

This makes many queries and assertions easier:

```coffee
users.map(name).contains( "anya" )
```

### Maps

_Maps_ are key-value structures in which the key is a string and the value can be any type. You can access individual fields using `[]` or get all `keys` and `values`

These are simple examples:

```coffee
m = {"a": 1, "b": 2}

> m.b
# 2

> m.keys
# ["a", "b"]

> m.values
# [1, 2]
```

This is a real-life example:

```
> os.env["SHELL"]
"/usr/bin/zsh"
```

#### Map assertions

The available assertions for maps are:

```coffee
{'a': 1, 'b': 2}.contains( key == 'b' )
{'a': 1, 'b': 2}.all( value > 0 )
{'a': 1, 'b': 2}.one( value != 1 )
{'a': 1, 'b': 2}.none( key == /d-f/ )
```

### Dicts

_Dicts_ are similar to maps but have one key difference: Maps are statically typed ahead of time; they have known value types.

That’s not the case when you process unknown data such as JSON. This presents a challenge, and the solution is `dict`:

```coffee
> parse.json("my.json")
parse.json.params: {
  1: 1.000000
  1.0: 1.000000
  _: null
  date: "2016-01-28T23:02:24Z"
  dict: {
	ee: 3.000000
	ej: 4.000000
	ek: 5.000000
  }

  ...

```

As you can see, there can be mixed values for all supported base types.

All other operations work as expected:

```coffee
> parse.json("my.json").params.keys
parse.json.params.keys: [
  0: "int-array"
  1: "f"
  2: "string-array"
  3: "hello"


> parse.json("my.json").params.value
parse.json.params.values: [
  0: null
  1: true
  2: 1.000000
  3: "hello"

> parse.json("my.json").params["f"][0]
parse.json.params[f][0]: {
  ff: 3.000000
}

> parse.json("my.json").
    params["f"].
    all( _.keys.contains("ff") )
[ok] value: true
```

#### `recurse` helper for dicts

The `recurse` helper makes it easy to extract data from a dict structure made up of mixed value types.

For example, suppose you need to retrieve all users from this JSON data structure:

```json
{
  "users": [{ "name": "bob" }],
  "owners": {
    "admins": [{ "name": "joy", "isOwner": true }]
  }
}
```

Because of the varying data types, finding users in this structure is difficult with traditional mechanisms. You need to understand the data structure and know where to search.

`recurse` eliminates that difficulty:

```coffee
jdata.recurse( name != empty )
```

```coffee
[
  0: {
    name: "bob"
  }
  1: {
    isOwner: true
    name: "joy"
  }
]
```

You can then map the user names:

```coffee
jdata.recurse( name != empty ).map(name)
```

```coffee
[
  0: "bob"
  1: "joy"
]
```

### Nested data

JSON, Terraform, and Kubernetes artifacts can include nested structures that make data a challenge to access. To make these easier to query, MQL supports simple accessors:

```coffee
tfblock {
  attributes.account_id.value
}
```

### Helpers for data type conversions

Helpers let you convert data to the type you need:

```coffee
> int(1.23)
1

> bool(1)
true

> float(12)
12

> string(1.89)
"1.89"

> regex("w.r.d") == "world 🌎"
/w.r.d/
```

## Error handling

For values that cannot be accessed, MQL provides errors:

```coffee
> file("/etc/shadow").content
[failed] file.content
  error: open /etc/shadow: permission denied
```

#### Null chaining

In general, `null` values are chained across their access:

```coffee
> sshd.config.params["NONE"].downcase == null
[ok] value: _
```

## Concurrency

MQL supports concurrent execution by default. All code that you write is executed in the order of its necessary I/O input.

For example:

```coffee
hosts = [
  tls("mondoo.com"),
  tls("mondoo.io"),
  ...
]

hosts.all(
  ciphers
    .none( /cbc/i )
)
```

This call checks all TLS ciphers on all the hosts that were previously defined. Such calls can take a while to execute if done serially. However, MQL looks for the entry points where data is being processed and executes those in parallel. In the example above, the TLS requests to all hosts will run in parallel and aggregate.

It doesn’t matter if the data is retrieved from an API, file, system command or other call; MQL always executes calls in parallel.

You don't have to configure or think about concurrency or parallel value assignment in MQL; concurrency is automatic on all available streams.

## Embedding

It’s easy to embed MQL in your code.

### CLI

A quick way to embed MQL is to execute MQL in the CLI and embed the results in other scripts:

```bash
> cnquery run local --json \
  -c "processes.where(command == /long test/).map(pid)" | ...
```

### Code embedding

You can embed the MQL execution engine as a dependency. This example embeds in Go:

```golang
package mqldiscovery

import (
	"go.mondoo.com/cnquery"
	"go.mondoo.com/cnquery/llx"
	"go.mondoo.com/cnquery/motor"
	aws_provider "go.mondoo.com/cnquery/motor/providers/aws"
	"go.mondoo.com/cnquery/mql"
	"go.mondoo.com/cnquery/resources"
	resource_pack "go.mondoo.com/cnquery/resources/packs/aws"
)

func New(provider *aws_provider.Provider) (*MqlDiscovery, error) {
	m, err := motor.New(provider)
	if err != nil {
		return nil, err
	}
	rt := resources.NewRuntime(resource_pack.Registry, m)
	return &MqlDiscovery{rt: rt}, nil
}

type MqlDiscovery struct {
	rt *resources.Runtime
}

func (md *MqlDiscovery) GetResourceCount(query string) int32 {
	mqlExecutor := mql.New(md.rt, cnquery.DefaultFeatures)
	value, err := mqlExecutor.Exec(query, map[string]*llx.Primitive{})
	if err != nil {
		return 0
	}

	a := 0
	d, _ := mapstructure.NewDecoder(&mapstructure.DecoderConfig{
		Result: &a,
	})
	d.Decode(value.Value)
	return int32(a)
}

func (md *MqlDiscovery) GetRegionsList() []string {
	mqlExecutor := mql.New(md.rt, cnquery.DefaultFeatures)
	value, err := mqlExecutor.Exec("aws.regions", map[string]*llx.Primitive{})
	if err != nil {
		return []string{}
	}

	a := []string{}
	d, _ := mapstructure.NewDecoder(&mapstructure.DecoderConfig{
		Result: &a,
	})
	d.Decode(value.Value)
	return a
}

func (md *MqlDiscovery) Close() {
	if md.rt != nil && md.rt.Motor != nil {
		md.rt.Motor.Close()
	}
}

func (md *MqlDiscovery) RunQuery(query string) interface{} {
	mqlExecutor := mql.New(md.rt, cnquery.DefaultFeatures)
	value, err := mqlExecutor.Exec(query, map[string]*llx.Primitive{})
	if err != nil {
		return nil
	}

	var a interface{}
	d, _ := mapstructure.NewDecoder(&mapstructure.DecoderConfig{
		Result: &a,
	})
	d.Decode(value.Value)
	return a
}
```

---

# The Interactive Shell

Both `cnspec` and `cnquery` provide a **built-in interactive shell** that acts like an IDE for MQL. This is one of the most powerful tools for:

- **Learning MQL**: experiment with selectors, built-ins, regex, and comparisons live.
- **Testing policies**: copy queries from a policy file and run them interactively.
- **Investigating live systems**: connect to a cloud account, Kubernetes cluster, or host to query live state.
- **Incident response**: during a security event, you can ask questions of your infrastructure in real time, without writing code or waiting for dashboards to refresh.

Think of the shell as a REPL (Read–Eval–Print Loop) for your infrastructure. You type MQL queries, it evaluates them against your connected system, and prints results immediately.

---

## How to launch the interactive shell

Pick a target and start a shell:

```bash
# Local OS
cnspec shell local

# AWS account (uses your AWS credentials)
cnspec shell aws

# GCP project (replace with your project ID)
cnspec shell gcp project <project-id>

# Azure — lists your subscriptions, select one by number
cnspec shell azure

# Kubernetes — uses current KUBECONFIG and lists clusters/namespaces to select
cnspec shell k8s
```

When you connect, you’ll see a banner confirming the provider and the asset you are connected to.

---

## Built-in Help

The shell has a built-in help command. Use it to explore what resources are available and what fields they expose.

Provider-level help:

```
cnspec> help aws
cnspec> help gcp
cnspec> help k8s
```

Resource-level help:

```
cnspec> help aws.ec2.instance
cnspec> help gcp.project
cnspec> help k8s.deployment
```

Each `help` command shows `fields`, `types`, and nested resources you can query.

## Examples of Shell in Action

Investigating a live security incident

**Which AWS EC2 instances have a public IP?**

```
aws.ec2.instances.where(publicIp != empty) { instanceId region state tags publicIp }
```

**Which GCP compute instances are running with external NAT?**

```
gcp.compute.instances.where(networkInterfaces.where(_['accessConfigs'].where(_['name'] == "External NAT")))
```

**Which Kubernetes pods are not in Running state?**

```
k8s.pods.where(status.phase != "Running") { name namespace status.phase }
```

**Which Linux services are running?**

```
services.where(running == true) { name enabled type }
```

These queries can be run live during incident response to quickly answer pressing questions.

## Why the shell matters

The interactive shell is more than a convenience:

- It is the fastest way to learn MQL by trial and error.
- It provides deep visibility into resources through help.
- It allows ad-hoc investigation without pre-built dashboards.
- It bridges the gap between development (writing policies) and operations (running live checks).

By practicing built-ins in the shell, you not only master MQL syntax but also learn how to apply it to real-world infrastructure problems on the fly.

Now that you have a solid foundation for using the interactive shell, the next step is mastering MQL built-ins. The shell is the perfect environment to practice these built-ins live.

---

# What are MQL built-ins?

Built-ins are the core language features that let you filter, transform, and make assertions across collections of data. They are the difference between just retrieving raw data and turning that data into meaningful answers.

Think of built-ins as the verbs of MQL:

- `.where()` narrows down what you’re looking at.
- `.map()` transforms the results.
- `.all()`, `.any()`, `.none()`, `.one()` let you assert truth over collections.
- `.list`, `.length`, and `.containsOnly` help you structure and compare results.

In the following sections we’ll explore each built-in in detail, with examples you can run in the shell. You’ll see both policy-style checks and inventory-style queries so you can use them in compliance scenarios as well as live investigation.

## Quick Reference for MQL Built-ins

| Built-in               | Input types               | Output   | Typical use                                       |
| ---------------------- | ------------------------- | -------- | ------------------------------------------------- |
| `address`              | string (CIDR)             | string   | Return the network address of a CIDR              |
| `all(cond)`            | arrays, iterables         | boolean  | Assert all elements match (universal requirement) |
| `any(cond)`            | arrays, iterables         | boolean  | Assert at least one element matches               |
| `camelcase`            | string                    | string   | Convert to camelCase                              |
| `cidr`                 | string (CIDR)             | string   | Return the CIDR block                             |
| `contains(val)`        | arrays, strings           | boolean  | Check membership or substring presence            |
| `containsAll([])`      | arrays, strings           | boolean  | Assert all listed values are present              |
| `containsNone([])`     | arrays, strings           | boolean  | Assert none of the listed values are present      |
| `containsOnly([])`     | arrays of scalars         | boolean  | Assert only allowed values are present            |
| `date`                 | time, epoch               | string   | Format or display a date                          |
| `days`                 | integer                   | duration | Convert number into days duration                 |
| `downcase`             | string                    | string   | Convert to lowercase                              |
| `duplicates`           | arrays                    | array    | Return duplicate elements                         |
| `duration`             | integer, epoch difference | duration | Represent elapsed time                            |
| `epoch`                | time                      | int      | Return Unix epoch                                 |
| `find(params)`         | provider resources        | array    | Discover resources in a scope                     |
| `first`                | arrays                    | element  | Return the first element                          |
| `flat`                 | nested arrays             | array    | Flatten nested arrays                             |
| `hours`                | integer                   | duration | Convert number into hours duration                |
| `in(list)`             | scalar, list              | boolean  | Test membership in a list                         |
| `inRange(val,min,max)` | numbers                   | boolean  | Check if value is within range                    |
| `isUnspecified`        | string (IP or CIDR)       | boolean  | Test if value is unspecified (e.g., 0.0.0.0)      |
| `keys`                 | map/dict                  | array    | Return keys of a dictionary                       |
| `last`                 | arrays                    | element  | Return the last element                           |
| `length`               | arrays, strings           | integer  | Count elements or characters                      |
| `lines`                | string                    | array    | Split into lines                                  |
| `map(expr)`            | arrays, iterables         | array    | Transform or project values                       |
| `minutes`              | integer                   | duration | Convert number into minutes duration              |
| `none(cond)`           | arrays, iterables         | boolean  | Assert no elements match                          |
| `notIn(list)`          | scalar, list              | boolean  | Test value is not in list                         |
| `one(cond)`            | arrays, iterables         | boolean  | Assert exactly one element matches                |
| `prefix`               | string (CIDR)             | string   | Return network prefix                             |
| `prefixLength`         | string (CIDR)             | integer  | Return prefix length                              |
| `recurse`              | nested resources          | array    | Traverse nested structures                        |
| `sample`               | arrays                    | element  | Return a random element                           |
| `seconds`              | integer                   | duration | Convert number into seconds duration              |
| `split`                | string                    | array    | Split by delimiter                                |
| `subnet`               | string (CIDR)             | string   | Return subnet portion                             |
| `suffix`               | string                    | string   | Return suffix (network utility)                   |
| `trim`                 | string                    | string   | Remove leading/trailing whitespace                |
| `unique`               | arrays                    | array    | Return only unique elements                       |
| `unix`                 | epoch                     | time     | Convert epoch to time                             |
| `upcase`               | string                    | string   | Convert to uppercase                              |
| `values`               | map/dict                  | array    | Return values of a dictionary                     |
| `version`              | string (semver)           | version  | Parse and compare version strings                 |
| `where(cond)`          | arrays, iterables         | array    | Filter a collection by condition                  |

## Additional resources

These are other helpful resources in the Mondoo docs:

| Page                                                     | Purpose                                                                                                     |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Policy Authoring Guide](/cnspec/cnspec-policies/write/) | Describes how to write Mondoo security policies                                                             |
| [MQL Resources](/mql/resources/)                         | Lists all of the information that MQL can retrieve from infrastructure assets and describes how to use them |
| [Get Started with cnquery](/cnquery/)                    | Describes how to use the cnquery shell for ad hoc MQL queries                                               |
| [Query Your Infrastructure](/cnquery/cnquery-query)      | Describes how to write queries to execute from the command line or to use in automation                     |
| [cnquery CLI commands](/cnquery/cli/cnquery/)            | Details all commands in the cnquery command line interface                                                  |
| [Create Checks in cnspec Shell](/cnspec/cnspec-scan/)    | Describes how to use the cnspec shell for ad hoc MQL assertions                                             |
| [cnspec CLI commands](/cnspec/cli/cnspec/)               | Details all commands in the cnspec command line interface                                                   |
