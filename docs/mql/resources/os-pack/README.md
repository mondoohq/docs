---
title: Operating Systems (OS) Resource Pack - MQL Resources
id: operating.systems.os.pack
sidebar_label: Operating Systems (OS) Resource Pack
displayed_sidebar: MQL
description: The Operating Systems (OS) resource pack lets you use MQL to query and assess the security of your operating system packages and configuration.
---

# Operating Systems (OS) MQL Resource Pack Reference

The Operating Systems (OS) resource pack lets you use MQL to query and assess the security of your operating system packages and configuration.

Resources included in this pack:

| ID                                                      | DESCRIPTION                                                |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| [asset](asset.md)                                       |                                                            |
| [asset.eol](asset.eol.md)                               |                                                            |
| [audit.advisory](audit.advisory.md)                     | Platform/package advisory                                  |
| [audit.cve](audit.cve.md)                               | Common Vulnerabilities and Exposures (CVEs)                |
| [audit.cvss](audit.cvss.md)                             | Common Vulnerability Scoring System (CVSS) score           |
| [auditd.config](auditd.config.md)                       | auditd (Linux Audit Daemon) configuration                  |
| [auditpol](auditpol.md)                                 | Windows audit policies                                     |
| [auditpol.entry](auditpol.entry.md)                     | Windows audit policy                                       |
| [authorizedkeys](authorizedkeys.md)                     | List of SSH authorized keys                                |
| [authorizedkeys.entry](authorizedkeys.entry.md)         | SSH authorized key                                         |
| [cloud](cloud.md)                                       | Details about an asset in the cloud                        |
| [cloudInstance](cloudinstance.md)                       | Cloud instance metadata                                    |
| [command](command.md)                                   | Results of running a command on the system                 |
| [container.image](container.image.md)                   | Container image                                            |
| [container.repository](container.repository.md)         | Container registry repository                              |
| [docker](docker.md)                                     | Docker host resource                                       |
| [docker.container](docker.container.md)                 | Docker container                                           |
| [docker.file](docker.file.md)                           | Dockerfile resource                                        |
| [docker.file.add](docker.file.add.md)                   | Dockerfile ADD instructions                                |
| [docker.file.copy](docker.file.copy.md)                 | Dockerfile COPY instructions                               |
| [docker.file.expose](docker.file.expose.md)             | Dockerfile EXPOSE instruction                              |
| [docker.file.from](docker.file.from.md)                 | Dockerfile FROM instructions                               |
| [docker.file.run](docker.file.run.md)                   | Dockerfile RUN instructions                                |
| [docker.file.stage](docker.file.stage.md)               | Dockerfile stages                                          |
| [docker.file.user](docker.file.user.md)                 | Dockerfile USER instructions                               |
| [docker.image](docker.image.md)                         | Docker image                                               |
| [file](file.md)                                         | File on the system                                         |
| [file.context](file.context.md)                         | File context is a range of lines/columns in a file         |
| [file.permissions](file.permissions.md)                 | Access permissions for a given file                        |
| [files](files.md)                                       |                                                            |
| [files.find](files.find.md)                             | Find files on the system                                   |
| [fstab](fstab.md)                                       |                                                            |
| [fstab.entry](fstab.entry.md)                           |                                                            |
| [group](group.md)                                       | Group on this system                                       |
| [groups](groups.md)                                     | Groups configured on this system                           |
| [ip6tables](ip6tables.md)                               | IPv6 tables                                                |
| [ipAddress](ipaddress.md)                               | IP address (v4 or v6) with additional networking details   |
| [iptables](iptables.md)                                 | IPv4 tables                                                |
| [iptables.entry](iptables.entry.md)                     |                                                            |
| [kernel](kernel.md)                                     | System kernel information                                  |
| [kernel.module](kernel.module.md)                       | System kernel module information                           |
| [kubelet](kubelet.md)                                   | Kubernetes kubelet configuration                           |
| [logindefs](logindefs.md)                               | Shadow password suite configuration                        |
| [lsblk](lsblk.md)                                       | Unix list block devices                                    |
| [lsblk.entry](lsblk.entry.md)                           | Unix block device                                          |
| [machine](machine.md)                                   |                                                            |
| [machine.baseboard](machine.baseboard.md)               | SMBIOS baseboard (or module) information                   |
| [machine.bios](machine.bios.md)                         | SMBIOS BIOS information                                    |
| [machine.chassis](machine.chassis.md)                   | SMBIOS system enclosure or chassis                         |
| [machine.system](machine.system.md)                     | SMBIOS system information                                  |
| [macos](macos.md)                                       | macOS specific resources                                   |
| [macos.alf](macos.alf.md)                               | macOS application layer firewall (ALF) service             |
| [macos.systemExtension](macos.systemextension.md)       | macOS system extension                                     |
| [macos.systemsetup](macos.systemsetup.md)               | macOS machine settings                                     |
| [macos.timemachine](macos.timemachine.md)               | macOS Time Machine                                         |
| [mondoo.eol](mondoo.eol.md)                             | Platform end-of-life information                           |
| [mount](mount.md)                                       | Unix mounted file system                                   |
| [mount.point](mount.point.md)                           | Unix mount point                                           |
| [network](network.md)                                   | Network information on this system                         |
| [networkInterface](networkinterface.md)                 | Detailed information of a network interface                |
| [npm.package](npm.package.md)                           |                                                            |
| [npm.packages](npm.packages.md)                         | npm packages                                               |
| [ntp.conf](ntp.conf.md)                                 | NTP service configuration                                  |
| [os](os.md)                                             | Operating system information                               |
| [os.base](os.base.md)                                   |                                                            |
| [os.linux](os.linux.md)                                 |                                                            |
| [os.rootCertificates](os.rootcertificates.md)           | Operating system root certificates                         |
| [os.unix](os.unix.md)                                   |                                                            |
| [os.update](os.update.md)                               | Operating system update information                        |
| [package](package.md)                                   | Package on the platform or OS                              |
| [packages](packages.md)                                 | List of packages on this system                            |
| [pam.conf](pam.conf.md)                                 | PAM configuration (pluggable authentication module)        |
| [pam.conf.serviceEntry](pam.conf.serviceentry.md)       |                                                            |
| [parse.certificates](parse.certificates.md)             | Parse certificates from files                              |
| [parse.ini](parse.ini.md)                               | Parse INI files                                            |
| [parse.json](parse.json.md)                             | Parse JSON files                                           |
| [parse.openpgp](parse.openpgp.md)                       | Parse OpenPGP from files                                   |
| [parse.plist](parse.plist.md)                           | Parse plist files                                          |
| [parse.xml](parse.xml.md)                               | Parse XML files                                            |
| [parse.yaml](parse.yaml.md)                             | Parse YAML files                                           |
| [pkgFileInfo](pkgfileinfo.md)                           |                                                            |
| [platform](platform.md)                                 |                                                            |
| [platform.advisories](platform.advisories.md)           | All platform/package advisories                            |
| [platform.cves](platform.cves.md)                       | All platform/package CVEs                                  |
| [platform.eol](platform.eol.md)                         | Deprecated; will be removed in version 12.0                |
| [port](port.md)                                         | TCP/IP port on the system                                  |
| [ports](ports.md)                                       | TCP/IP ports on the system                                 |
| [powershell](powershell.md)                             | Results of running a PowerShell script on the system       |
| [privatekey](privatekey.md)                             | Private key resource                                       |
| [process](process.md)                                   | Process on this system                                     |
| [processes](processes.md)                               | Processes available on this system                         |
| [python](python.md)                                     | Python package details found on the operating system image |
| [python.package](python.package.md)                     | Python package information                                 |
| [registrykey](registrykey.md)                           | Windows registry key                                       |
| [registrykey.property](registrykey.property.md)         | Windows registry key property                              |
| [rsyslog.conf](rsyslog.conf.md)                         | rsyslog service configuration                              |
| [secpol](secpol.md)                                     | Windows local security policy                              |
| [service](service.md)                                   | Service on this system                                     |
| [services](services.md)                                 | Services configured on this system                         |
| [shadow](shadow.md)                                     | Shadowed password file                                     |
| [shadow.entry](shadow.entry.md)                         | Shadowed password file entry                               |
| [sshd](sshd.md)                                         | SSH server resource                                        |
| [sshd.config](sshd.config.md)                           | SSH server configuration                                   |
| [sshd.config.matchBlock](sshd.config.matchblock.md)     | A block of SSH server configuration                        |
| [usb](usb.md)                                           | Experimental: USB resource                                 |
| [usb.device](usb.device.md)                             | Experimental: USB device                                   |
| [user](user.md)                                         | User on this system                                        |
| [users](users.md)                                       | Users configured on this system                            |
| [vuln.advisory](vuln.advisory.md)                       | Advisory information                                       |
| [vuln.cve](vuln.cve.md)                                 | CVE information                                            |
| [vuln.package](vuln.package.md)                         | Package information relevant for vulnerability management  |
| [vulnmgmt](vulnmgmt.md)                                 | Vulnerability Information                                  |
| [windows](windows.md)                                   | Windows-specific resource to get operating system details  |
| [windows.bitlocker](windows.bitlocker.md)               | Windows BitLocker                                          |
| [windows.bitlocker.volume](windows.bitlocker.volume.md) | Windows BitLocker volume                                   |
| [windows.feature](windows.feature.md)                   | Deprecated. Use `windows.serverFeature` instead            |
| [windows.firewall](windows.firewall.md)                 | Windows Firewall resource                                  |
| [windows.firewall.profile](windows.firewall.profile.md) | Windows Firewall profile entry                             |
| [windows.firewall.rule](windows.firewall.rule.md)       | Windows Firewall rule entry                                |
| [windows.hotfix](windows.hotfix.md)                     | Windows hotfix resource                                    |
| [windows.optionalFeature](windows.optionalfeature.md)   | Windows optional feature resource (desktop-only)           |
| [windows.security](windows.security.md)                 |                                                            |
| [windows.security.health](windows.security.health.md)   | Health of the Windows security provider                    |
| [windows.security.product](windows.security.product.md) | Private Windows security product                           |
| [windows.serverFeature](windows.serverfeature.md)       | Windows Server feature resource                            |
| [yum](yum.md)                                           | Yum package manager resource                               |
| [yum.repo](yum.repo.md)                                 | Yum repository resource                                    |
