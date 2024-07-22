---
title: gitlab.project
id: gitlab.project
sidebar_label: gitlab.project
displayed_sidebar: MQL
description: GitLab project
---

# gitlab.project

**Maturity**

experimental

**Description**

GitLab project

**Fields**

| ID                                        | TYPE                                                                                                | DESCRIPTION                                                                    |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| id                                        | int                                                                                                 | Project ID                                                                     |
| name                                      | string                                                                                              | Project name                                                                   |
| fullName                                  | string                                                                                              | The full name of the project, including the namespace                          |
| path                                      | string                                                                                              | Project path                                                                   |
| createdAt                                 | time                                                                                                | Create date of the project                                                     |
| description                               | string                                                                                              | Project description                                                            |
| defaultBranch                             | string                                                                                              | Default Git branch                                                             |
| visibility                                | string                                                                                              | The project's visibility level: private, internal, or public                   |
| archived                                  | bool                                                                                                | Whether the project is archived                                                |
| mirror                                    | bool                                                                                                | Whether the project is a mirror                                                |
| webURL                                    | string                                                                                              | URL of the project                                                             |
| emailsDisabled                            | bool                                                                                                | Whether project email notifications are disabled                               |
| allowMergeOnSkippedPipeline               | bool                                                                                                | Whether merging merge requests is allowed when a pipeline is skipped           |
| onlyAllowMergeIfPipelineSucceeds          | bool                                                                                                | Whether merging merge requests is allowed only if the pipelines succeed        |
| onlyAllowMergeIfAllDiscussionsAreResolved | bool                                                                                                | Whether merging merge requests is allowed only if all discussions are resolved |
| issuesEnabled                             | bool                                                                                                | Whether the issues feature is enabled                                          |
| mergeRequestsEnabled                      | bool                                                                                                | Whether the merge request feature is enabled                                   |
| wikiEnabled                               | bool                                                                                                | Whether the wiki feature is enabled                                            |
| snippetsEnabled                           | bool                                                                                                | Whether the snippets feature is enabled                                        |
| containerRegistryEnabled                  | bool                                                                                                | Whether the container registry feature is enabled                              |
| serviceDeskEnabled                        | bool                                                                                                | Whether the Service Desk feature is enabled                                    |
| packagesEnabled                           | bool                                                                                                | Whether the packages feature is enabled                                        |
| autoDevopsEnabled                         | bool                                                                                                | Whether the Auto DevOps feature is enabled                                     |
| requirementsEnabled                       | bool                                                                                                | Whether the requirements feature is enabled                                    |
| approvalRules                             | &#91;&#93;[gitlab.project.approvalRule](gitlab.project.approvalrule.md)                             | Approval rules for the project                                                 |
| mergeMethod                               | string                                                                                              | Merge methods for the project                                                  |
| approvalSettings                          | [gitlab.project.approvalSettings](gitlab.project.approvalsettings.md)                               | Approval settings for the project                                              |
| protectedBranches                         | &#91;&#93;[gitlab.project.repository.protectedBranch](gitlab.project.repository.protectedbranch.md) | Protected branches settings for the project                                    |
