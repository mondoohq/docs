---
title: Find Advisories
sidebar_label: Find Advisories
sidebar_position: 5
description: Use Mondoo to find  advisories that put your infrastructure at risk
image: /img/featured_img/mondoo-feature.jpg
---

Software vendors often release _advisories_ that provide recommendations on how to fix or mitigate vulnerabilities in their products. Advisories may or may not be released before vulnerabilities are disclosed. Sometimes advisories provide workarounds or other steps that users can take to mitigate a security weakness in the vendor’s products.

:::note

Not every known software issue has an advisory. Be sure to monitor vulnerabilities (CVEs) to find potential exploits in your infrastructure. To learn more, read [Find Vulnerabilities](/platform/security/posture/vulnerabilities).

:::

## Find advisories in your infrastructure

Find advisories for assets in a space:

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) in which you want to see vulnerabilities

2. In the left navigation bar, under **Vulnerabilities**, select **Advisories**.

   ![Find Advisories](/img/platform/security/advisories.png)

   The list shows advisories found in your infrastructure.

3. To filter the list, enter text in the search bar. These are some examples:

   - To show only advisories for a certain platform, enter all or part of the platform name. For example, type `windows`, `debian`, or `google`.

   - To find an advisory related to a specific CVE number, enter all or part of the number. For example, type `2023-21755` or `1325`.

   - To find advisories for a certain service, tool, API, or other technology, enter all or part of its name. For example, enter `winsock`, `curl`, or `cim`.

4. To see the assets in your space where the advisory is found, select the advisory.

## Risk factors

Risk factors are attributes that can elevate the risk that an advisory poses to your organization. Advisories can have their own risk factors:

| Icon                                                             | Risk factor                                                                                                                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Exploitable icon](/img/platform/security/exploitable.png)      | **Exploitable** advisories have known exploits in the wild. Attackers know how to breach a system using this defect and have already shown it can be done. |
| ![Remote execution icon](/img/platform/security/remote-exec.png) | **Remote execution** advisories are known to present remote code execution over the network. They let an attacker run malicious code on a target system.   |

Mondoo also flags an advisory if the _assets_ that contain the advisory present their own risk factors:

| Icon                                          | Risk factor                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ![Keys icon](/img/platform/security/keys.svg) | **Accessible keys** indicates that key or credential information is exposed.             |
| ![EOL icon](/img/platform/security/eol.svg)   | **End-of-life (EOL)** indicates an operating system version that is no longer supported. |

#### See also

[Find Vulnerabilities (CVEs)](/platform/security/posture/vulnerabilities)

---
