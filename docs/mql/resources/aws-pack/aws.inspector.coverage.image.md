---
title: aws.inspector.coverage.image
id: aws.inspector.coverage.image
sidebar_label: aws.inspector.coverage.image
displayed_sidebar: MQL
description: Amazon Inspector container image coverage group
---

# aws.inspector.coverage.image

**Supported platform**

- aws

**Description**

Amazon Inspector container image coverage group

**Fields**

| ID            | TYPE              | DESCRIPTION                     |
| ------------- | ----------------- | ------------------------------- |
| imagePulledAt | time              | Time when the image was scanned |
| tags          | map[string]string | Tags associated with the image  |
| region        | string            | Region where the image is found |
