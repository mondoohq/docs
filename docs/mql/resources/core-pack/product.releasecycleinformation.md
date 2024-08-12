---
title: product.releaseCycleInformation
id: product.releaseCycleInformation
sidebar_label: product.releaseCycleInformation
displayed_sidebar: MQL
description: End of life information for a product release
---

# product.releaseCycleInformation

**Description**

End of life information for a product release

**Fields**

| ID                   | TYPE            | DESCRIPTION                |
| -------------------- | --------------- | -------------------------- |
| name                 | string          | Release name               |
| cycle                | string          | Release cycle              |
| latestVersion        | string          | Last release version       |
| firstReleaseDate     | [time](time.md) | First release date         |
| lastReleaseDate      | [time](time.md) | Last release date          |
| endOfActiveSupport   | [time](time.md) | When active support ends   |
| endOfLife            | [time](time.md) | End of life date           |
| endOfExtendedSupport | [time](time.md) | When extended support ends |
| link                 | string          | Release link               |
