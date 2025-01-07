---
title: Find Vulnerabilities (CVEs) and Assess Their Risk
sidebar_label: Find Vulnerabilities (CVEs)
sidebar_position: 4
description: Use Mondoo to find  vulnerabilities that put your infrastructure at risk
image: /img/featured_img/mondoo-feature.jpg
---

A _vulnerability_ is a weakness in a computer system that an attacker can exploit to gain access or extract information. Also known as CVEs (common vulnerabilities and exposures), vulnerabilities may or may not contain exploits or methods to address the weaknesses.

![Vulnerabilities dashboard in the Mondoo Console](/img/platform/security/vuln-dash.png)

:::note

Vendors often release _advisories_ that provide recommendations on how to fix or mitigate vulnerabilities in their products. To learn more, read [Find Advisories](/platform/security/posture/advisories).

:::

## Find CVEs in your infrastructure

Find vulnerabilities for assets in a space:

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) in which you want to see vulnerabilities.

   :::tip

   You can also select a [workspace](/platform/start/organize/workspaces/) to view a subset of assets within a space.

   :::

2. In the left navigation bar, under **Vulnerabilities**, select **CVEs**.

   ![Find vulnerabilities](/img/platform/security/cves.png)

   The list shows CVEs found in your infrastructure. For each CVE, Mondoo shows a rank (priority compared to other CVEs), score (CRITICAL, HIGH, MEDIUM, OR LOW), blast radius (calculated based on the affected assets), any [risk factors](#risk-factors), and when the vulnerability was first found in your infrastructure.

   To learn how Mondoo calculates risk and rank, read [Security Findings](/platform/security/posture/findings/).

3. To filter the list, enter text in the search bar. These are some examples:

   - To show only risks for a certain platform, enter all or part of the platform name. For example, type `windows`, `debian`, or `google`.

   - To find a specific CVE number, enter all or part of the number. For example, type `2023-21755` or `1325`.

   - To find risks to a certain service, tool, API, or other technology, enter all or part of its name. For example, enter `winsock`, `curl`, or `cim`.

4. Select the CVE to see its description and a detailed analysis.

   ![Vulnerability in Mondoo](/img/platform/security/vulnerability-affected.png)

   The summary on the CVE detail page shows the number of assets affected by this CVE. Select that information to jump to a list of affected assets.

## View risk and impact data

Mondoo provides extensive details about a CVE to help you understand the risk it presents to (and the impact it could have on) your organization. The simplest of these are the CVSS score and the risk factors flags.

![Vulnerability in Mondoo](/img/platform/security/vulnerability-top.png)

At the top of a CVE's detail page (accessed as described above) you find general information about the CVE. If the CVE (or the assets that contain the CVE) include any special risk factors, icons representing those risk factors display beside the CVE number. To the right is a box with a summary of the most important CVE information. Details are lower on the page.

### Risk factors

Risk factors are attributes that can raise or lower the risk that a CVE poses to your organization. CVEs can have their own risk factors:

| Icon                                                             | Risk factor                                                                                                                                                 |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Exploitable icon](/img/platform/security/exploitable.svg)      | **Exploitable** CVEs have known exploits in the wild. Attackers know how to breach a system using this vulnerability and have already shown it can be done. |
| ![Remote execution icon](/img/platform/security/remote-exec.svg) | **Remote execution** CVEs are known to present remote code execution over the network. They let an attacker run malicious code on a target system.          |

Mondoo also flags a CVE if the _assets_ that contain the CVE have factors that increase or decrease risk. These are _contextual_ risk factors for a CVE:

| Icon                                                    | Risk factor                                                                                                                                                                                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Keys icon](/img/platform/security/keys.svg)           | **Accessible keys** indicates that key or credential information is exposed on at least one asset with this CVE.                                                                                           |
| ![EOL icon](/img/platform/security/eol.svg)             | **End-of-life (EOL)** indicates that at least one asset with this CVE is running an operating system version that is approaching or has reached EOL (no longer supported).                                 |
| ![Database icon](/img/platform/security/db.svg)         | **Database** indicates that at least one asset with this CVE hosts a running database (MySQL or PostgreSQL).                                                                                               |
| ![In use icon](/img/platform/security/use.svg)          | **In use** indicates that at least one asset with this CVE has a running service or is in active use. Examples are assets running sshd, OpenSSH, NGINX, or Apache, or assets with open or listening ports. |
| ![Defensive icon](/img/platform/security/defensive.svg) | **Defensive** indicates that at least one asset with this CVE has defensive countermeasures in place (SELinux or AppArmor).                                                                                |

### CVSS score and metrics

The CVSS base score is a single number representing the severity of a vulnerability. It ranges from 0 (low severity) to 10 (critical). The score is calculated based on the Common Vulnerability Scoring System specification from the Forum of Incident Response and Security Teams (FIRST). CVSS scoring is the most widely accepted means of evaluating CVEs.

![CVSS score in Mondoo](/img/platform/security/vuln-cvss.png)

The CVSS base score is calculated based on exploitability metrics, a scope metric, and impact metrics. The sections below describe these metrics. To learn more about the CVSS base score and what it means for your infrastructure, read the [FIRST CVSS documentation](https://www.first.org/cvss/).

<details>
   <summary>Show or hide CVSS score details.</summary>

#### Exploitability metrics

These metrics reflect how easy the CVE is to exploit:

- **Attack vector** is the means by which an attacker can exploit a CVE, such as over a network. An exploit is more likely if an attacker can be access the vulnerable component remotely. Possible values are:

  - Network

  - Adjacent

  - Local

  - Physical

- **Attack complexity** indicates the amount of effort (beyond the attack itself), such as key theft or an additional attack. Possible values are:

  - Low

  - High

- **Privileges required** describes the level of access an attacker needs to succeed. Possible values are:

  - None (no privileges)

  - Low (basic privileges)

  - High (broad access to sensitive resources)

- **User interaction** reflects whether the attacker needs the help of an inside human user. Possible values are:

  - None (does not require another person)

  - Passive (requires an unknowing person)

  - Active (requires a willing participant)

#### Scope metric

The Scope metric indicates whether a vulnerability in one component has an impact on other resources beyond its security scope. Possible values are:

- Unchanged (can only affect resources managed by the same security authority)

- Changed (can spread outside the original security authority)

#### Impact metrics

These metrics reflect the possible results of the exploit:

- **Confidentiality** represents the portion of data the attacker has access to, how much confidentiality the victim loses. Possible values are:

- High (total loss of confidentiality)

- Low (some loss of confidentiality)

- None (no loss of confidentiality)

- **Integrity** evaluates how much the exploit diminishes the integrity of the victim's infrastructure. Possible values are:

  - High (for example, attacker can modify protected files with serious consequences)

  - Low (attacker has less control or consequences are not as serious)

  - None (no loss of integrity)

- **Availability** shows the impact to the availability of the exploited component. Possible values are:

  - High (total loss of availability)

  - Low (reduced performance or interruptions)

  - None (no impact on availability)

</details>

### EPSS score

Another scoring system from [FIRST](https://www.first.org), the Exploit Prediction Scoring System (EPSS) estimates the probability that a vulnerability will be exploited in the wild in the next 30 days. Because this system focuses on likelihood of an exploit actually occurring, it provides important data to help you prioritize software updates in your environment.

![EPSS score in Mondoo](/img/platform/security/vuln-epss.png)

Mondoo provides three EPSS data points for each CVE:

- **Probability** is the primary data point in the EPSS. It answers the question: How likely is it that an attacker will exploit this CVE in the wild in the next 30 days? Mondoo shows this data as a percentage: 1% probability means a successful exploit is unlikely, while 99% probability means it's extremely likely that an attacker will successfully exploit the CVE within a month.

- **Percentile** expresses _in a comparative way_ the probability of a CVE being exploited: This CVE is x% more likely to be exploited than all CVEs that have ever been evaluated with EPSS. For example, the CVE in the image above is in the 96.9th percentile; it's more likely to be used for a successful attack in the next 30 days than 96.9% of all CVEs.

- **CVSS3 score** is the CVSS base score described in the section above.

The likelihood of a CVE being exploited in the next 30 days and the CVSS base score are strong metrics to help you decide which CVEs are your highest priorities. To learn how the EPSS score is calculated and what it means for your organization, read the [FIRST EPSS documentation](https://www.first.org/epss/).

#### See also

- [Find Advisories](/platform/security/posture/advisories/)

- [Prioritize Security Findings](/platform/security/posture/findings/)

---
