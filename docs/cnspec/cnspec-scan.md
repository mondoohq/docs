---
title: Create Checks in cnspec Shell
id: cnspec-scan
sidebar_label: Create Checks in cnspec Shell
displayed_sidebar: cnspec
sidebar_position: 5
description: Use cnquery's interactive shell to learn about checks
image: /img/featured_img/mondoo-feature.jpg
---

cnspec provides an interactive shell in which you can explore. It helps you understand the checks that cnspec policies use, and write your own as well. It’s also a great way to interact with both local and remote targets on the fly.

Run the shell:

```bash
cnspec shell local
```

The shell provides a `help` command to get information on the resources that power cnspec. Running help without any arguments lists all of the available MQL resources and their fields. You can also run `help RESOURCE` to get more information on a specific resource. For `RESOURCE`, substitute the name of the resource you want to learn about. For example, this command:

```
cnspec> help ports
```

Returns this help:

```
ports:              TCP/IP ports on the system
  list []port:      TCP/IP ports on the system
  listening []port: All listening ports
```

The shell features auto-complete, which makes it easy to explore.

Once inside the shell, you can enter MQL checks like this:

```coffeescript
ports.listening.none( port == 23 )
```

To clear the terminal, type `clear`.

To exit cnspec shell, press `CTRL + D` or type `exit`.

## Learn more​

- To explore cnspec commands, read the [CLI Reference](/cnspec/cli/cnspec/).

- To explore MQL resources, read the [MQL Reference](/mql/resources/).

- To learn about scanning systems using policies, read [Get Started](/cnspec/).

---
