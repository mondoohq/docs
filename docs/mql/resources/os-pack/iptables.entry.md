---
title: iptables.entry
id: iptables.entry
sidebar_label: iptables.entry
displayed_sidebar: MQL
---

# iptables.entry

**Fields**

| ID          | TYPE   | DESCRIPTION                                                                                    |
| ----------- | ------ | ---------------------------------------------------------------------------------------------- |
| lineNumber  | int    | Line number of statistic, which is used to create the ID                                       |
| packets     | int    | Packets from iptable                                                                           |
| bytes       | int    | How large the packet is in octets, including headers and everything.                           |
| target      | string | What to do with the packet if it matches a rule                                                |
| protocol    | string | Protocol of the next level layer (e.g., TCP, UDP, ICMP, etc)                                   |
| opt         | string | IP options                                                                                     |
| in          | string | Input                                                                                          |
| out         | string | Output                                                                                         |
| source      | string | Source address field that tells the receiver where the packet came from                        |
| destination | string | The destination IP address of the traffic, subnet of the traffic, or anywhere                  |
| options     | string | Optional settings within the header such as internet timestamps, SACK, or record route options |
| chain       | string | Input or output, which is used to create the ID                                                |
