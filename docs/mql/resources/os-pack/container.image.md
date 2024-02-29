---
title: container.image
id: container.image
sidebar_label: container.image
displayed_sidebar: MQL
description: Container image
---

# container.image

**Description**

Container image

**Fields**

| ID             | TYPE                                            | DESCRIPTION                                                |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| reference      | string                                          | Image reference                                            |
| name           | string                                          | Fully-qualified reference name                             |
| identifier     | string                                          | Identifier of type-specific portion of the image reference |
| identifierType | string                                          | Identifier type: tag or digest                             |
| repository     | [container.repository](container.repository.md) | Repository used for the container image                    |
