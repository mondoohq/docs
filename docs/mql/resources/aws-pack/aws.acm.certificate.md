---
title: aws.acm.certificate
id: aws.acm.certificate
sidebar_label: aws.acm.certificate
displayed_sidebar: MQL
description: AWS Certificate Manager Certificate resource (provides an object representing an individual ACM certificate)
---

# aws.acm.certificate

**Supported platform**

- aws

**Description**

AWS Certificate Manager Certificate resource (provides an object representing an individual ACM certificate)

The `aws.acm.certificate` resource provides fields for assessing the configuration of AWS ACM certificates. For usage, read the `aws.acm` resource documentation.

**Fields**

| ID           | TYPE                | DESCRIPTION                                                                                           |
| ------------ | ------------------- | ----------------------------------------------------------------------------------------------------- |
| arn          | string              | ARN for the certificate                                                                               |
| notBefore    | time                | Time before which the certificate is not valid                                                        |
| notAfter     | time                | Time after which the certificate is not valid                                                         |
| createdAt    | time                | Time when the cert was requested                                                                      |
| domainName   | string              | FQDN for the certificate                                                                              |
| status       | string              | Status of the certificate: issued, expired, revoked, and so on                                        |
| subject      | string              | Name of the entity associated with the public key in the certificate                                  |
| certificate  | network.certificate | Retrieves an Amazon-issued certificate and its certificate chain                                      |
| tags         | map[string]string   | Tags associated with the certificate                                                                  |
| keyAlgorithm | string              | Algorithm used to generate the public-private key pair                                                |
| serial       | string              | Serial number of the certificate                                                                      |
| source       | string              | Source of the certificate: AMAZON_ISSUED or IMPORTED                                                  |
| issuer       | string              | Name of the certificate authority that issued and signed the certificate                              |
| issuedAt     | time                | Time at which the certificate was issued (exists only when the certificate source is AMAZON_ISSUED)   |
| importedAt   | time                | Date and time when the certificate was imported (exists only when the certificate source is IMPORTED) |
