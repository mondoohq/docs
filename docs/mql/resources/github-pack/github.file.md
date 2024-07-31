---
title: github.file
id: github.file
sidebar_label: github.file
displayed_sidebar: MQL
description: GitHub repository file
---

# github.file

**Description**

GitHub repository file

**Fields**

| ID          | TYPE                                    | DESCRIPTION                    |
| ----------- | --------------------------------------- | ------------------------------ |
| path        | string                                  | File path                      |
| name        | string                                  | File name                      |
| type        | string                                  | File type                      |
| sha         | string                                  | File shasum                    |
| isBinary    | bool                                    | Whether the file is a binary   |
| files       | &#91;&#93;[github.file](github.file.md) | List of files in the directory |
| ownerName   | string                                  | File owner                     |
| repoName    | string                                  | File repository name           |
| content     | string                                  | File content                   |
| downloadUrl | string                                  | File download URL              |
