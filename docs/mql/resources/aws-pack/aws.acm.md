---
title: aws.acm
id: aws.acm
sidebar_label: aws.acm
displayed_sidebar: MQL
description: AWS Certificate Manager resource (for assessing the configuration of AWS Certificate Manager)
---

# aws.acm

**Supported platform**

- aws

**Description**

AWS Certificate Manager resource (for assessing the configuration of AWS Certificate Manager)

Use the `aws.acm` resource to assess the configuration of the AWS Certificates Manager service in the account. This resource returns a list of ACM certificates found in the account.

**Fields**

| ID           | TYPE                                                    | DESCRIPTION                                                                                       |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| certificates | &#91;&#93;[aws.acm.certificate](aws.acm.certificate.md) | List of `aws.acm.certificate` objects representing ACM certificates configured within the account |

**Examples**

Return a list of `aws.acm.certificate` resources within the AWS account

```coffeescript
aws.acm.certificates
```

Return a list of `aws.acm.certificate` resources within the AWS account along with values for specified fields

```coffeescript
aws.acm.certificates {
  arn
  notBefore
  notAfter
  createdAt
  domainName
  status
  subject
  certificate()
}
```

Check whether ACM certificates in your account are marked for expiration within 90 days

```coffeescript
aws.acm.certificates.
  where( status != /PENDING_VALIDATION/ ).
  all (notAfter - notBefore <= 90 * time.day)
```

**References**

- [What Is AWS Certificate Manager?](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)
- [Security in AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/security.html)
