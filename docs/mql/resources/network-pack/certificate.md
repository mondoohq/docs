---
title: certificate
id: certificate
sidebar_label: certificate
displayed_sidebar: MQL
description: x509 certificate resource
---

# certificate

**Description**

x509 certificate resource

**Fields**

| ID                    | TYPE                                          | DESCRIPTION                                           |
| --------------------- | --------------------------------------------- | ----------------------------------------------------- |
| pem                   | string                                        | PEM content                                           |
| fingerprints          | map[string]string                             | Certificate fingerprints                              |
| serial                | string                                        | Serial number                                         |
| subjectKeyID          | string                                        | Subject unique identifier                             |
| authorityKeyID        | string                                        | Authority key identifier                              |
| subject               | [pkix.name](pkix.name.md)                     | Subject                                               |
| issuer                | [pkix.name](pkix.name.md)                     | Issuer                                                |
| version               | int                                           | Version number                                        |
| notBefore             | time                                          | Validity period validity period                       |
| notAfter              | time                                          | Validity period not after                             |
| expiresIn             | time                                          | Expiration duration                                   |
| signature             | string                                        | Signature                                             |
| signingAlgorithm      | string                                        | Signature algorithm ID                                |
| isCA                  | bool                                          | Flag if certificate authority                         |
| keyUsage              | &#91;&#93;string                              | Key usage                                             |
| extendedKeyUsage      | &#91;&#93;string                              | Extended key usage                                    |
| extensions            | &#91;&#93;[pkix.extension](pkix.extension.md) | Extensions                                            |
| policyIdentifier      | &#91;&#93;string                              | Policy identifier                                     |
| crlDistributionPoints | &#91;&#93;string                              | CRL distribution points                               |
| ocspServer            | &#91;&#93;string                              | OCSP                                                  |
| issuingCertificateUrl | &#91;&#93;string                              | Issuing certificate URL                               |
| isRevoked             | bool                                          | Whether this certificate has been revoked             |
| revokedAt             | time                                          | The time at which this certificate was revoked        |
| isVerified            | bool                                          | Whether the certificate is valid (based on its chain) |
| sanExtension          | [pkix.sanExtension](pkix.sanextension.md)     | SAN extension value params                            |
