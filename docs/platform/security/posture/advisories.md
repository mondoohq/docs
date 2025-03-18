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

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) in which you want to see advisories.

   :::tip

   You can also select a [workspace](/platform/start/organize/workspaces/) to view a subset of assets within a space.

   :::

2. In the left navigation, under **Findings**, select **Advisories**.

   ![Find Advisories](/img/platform/security/advisories.png)

   The list shows CVEs found in your infrastructure. For each CVE, Mondoo shows a rank (priority compared to other CVEs), score (CRITICAL, HIGH, MEDIUM, OR LOW), blast radius (calculated based on the affected assets), any [risk factors](#risk-factors), and when the vulnerability was first found in your infrastructure.

   To learn how Mondoo calculates risk and rank, read [Security Findings](/platform/security/posture/findings/).

3. To filter the list, enter text in the search bar. These are some examples:

   - To show only advisories for a certain platform, enter all or part of the platform name. For example, type `windows`, `debian`, or `google`.

   - To find an advisory related to a specific CVE number, enter all or part of the number. For example, type `2024-21755` or `1325`.

   - To find advisories for a certain service, tool, API, or other technology, enter all or part of its name. For example, enter `winsock`, `curl`, or `cim`.

4. To see the assets in your space where the advisory is found, select the advisory.

## Risk factors

Risk factors are attributes that can elevate the risk that an advisory poses to your organization. Risk factors can be attributes of the advisory, CVE, or asset.

| Icon                                                          | Risk factor                              | Description                       |
|:------------------------------------------------------------- |:---------------------------------------- |:--------------------------------- |
| ![EOL icon](/img/platform/security/eol.svg)                   | End of life (EOL)                        | An operating system version is approaching or has reached EOL (no longer supported). This means that there can be any number of vulnerabilities that are unreported and have no fixes. |
| ![Remote exec icon](/img/platform/security/remote-exec.svg)   | Remote execution                         | An attacker can run malicious code on a target system without physically accessing the asset.   |
| ![Known exploit icon](/img/platform/security/exploitable.svg) | Known exploited vulnerability            | There are known exploits in the wild. Attackers know how to breach a system using this defect and have already shown it can be done. |
| ![Database icon](/img/platform/security/db.svg)               | Database server running                  | At least one asset with this advisory hosts a running database (MySQL or PostgreSQL).                                                                                               |
| ![In use icon](/img/platform/security/use.svg)                | Service listening on open host ports | At least one asset with this advisory has a running service or is in active use. Examples are assets running sshd, OpenSSH, NGINX, or Apache. |
| ![Defensive icon](/img/platform/security/defensive.svg)       | Defensive countermeasures                | At least one asset with this advisory has defensive countermeasures in place (SELinux or AppArmor).                                                                                |
|                                                               | Vulnerability in a server or service     | At least one asset with this advisory has a vulnerable server or service running and can be exploited by attackers. (These include SSHd, chrony, Docker, NFS server, collectd server, cups, Samba, vsftpd, ProFTPD, Pure-FTPd, OpenLDAP, Nginx, Apache HTTP Server, SQL, MySQL, MariaDB Server, OpenSearch, ElasticSearch, Cassandra, MongoDB Server, and other processes.) |
| ![Keys icon](/img/platform/security/keys.svg)                 | Private SSH keys                         | At least one asset with this advisory has stored private SSH credentials.                                                                                           |




SELinux is active

SELinux is active on the system.

AppArmor is active

AppArmor is active on the system.

Microsoft Exchange Server

The Microsoft Exchange Server is running on the system.

Domain controller

The Active Directory Domain Service is running on the system.

Microsoft SQL Server

Microsoft SQL Server is running on the system.

Microsoft SQL Server listening on public port

Microsoft SQL Server is listening on a public port.

Microsoft IIS

Microsoft IIS is running on the system.

Internet Exposed

Cloud asset is exposed to the internet.

Incompletely removed packages

The system has incompletely removed packages, which may still contain configuration data.

| Icon                                                             | Risk factor                                                                                                                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |


Mondoo also flags an advisory if the _assets_ that contain the advisory have factors that increase or decrease risk. These are _contextual_ risk factors for an advisory:

| Icon                                                    | Risk factor                                                                                                                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |





#### See also

- [Find Vulnerabilities (CVEs)](/platform/security/posture/vulnerabilities/)

- [Prioritize Security Findings](/platform/security/posture/findings/)

---
