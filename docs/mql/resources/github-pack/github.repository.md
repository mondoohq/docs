---
title: github.repository
id: github.repository
sidebar_label: github.repository
displayed_sidebar: MQL
description: GitHub repository
---

# github.repository

**Description**

GitHub repository

**Init**

github.repository(name string)

**Fields**

| ID                  | TYPE                                                    | DESCRIPTION                                                        |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| id                  | int                                                     | can only be used when logged in to github as a user, Repository ID |
| name                | string                                                  | Repository name                                                    |
| fullName            | string                                                  | Repository full name                                               |
| description         | string                                                  | Repository description                                             |
| cloneUrl            | string                                                  | Repository clone URL                                               |
| sshUrl              | string                                                  | Repository SSH URL                                                 |
| homepage            | string                                                  | Repository homepage                                                |
| topics              | &#91;&#93;string                                        | Repository topics                                                  |
| language            | string                                                  | Repository language                                                |
| watchersCount       | int                                                     | Number of users watching the repository                            |
| forksCount          | int                                                     | Number of repository forks                                         |
| stargazersCount     | int                                                     | Number of repository stargazers                                    |
| openIssuesCount     | int                                                     | Number of open issues in repository                                |
| createdAt           | time                                                    | Repository create time                                             |
| updatedAt           | time                                                    | Repository update time                                             |
| pushedAt            | time                                                    | Repository pushed time                                             |
| archived            | bool                                                    | Whether the repository is archived                                 |
| disabled            | bool                                                    | Whether the repository is disabled                                 |
| private             | bool                                                    | Whether the repository is private                                  |
| isFork              | bool                                                    | Whether the repository is a fork                                   |
| visibility          | string                                                  | Repository visibility                                              |
| allowAutoMerge      | bool                                                    | Whether the repository allows auto merging                         |
| allowForking        | bool                                                    | Whether the repository allows forking                              |
| allowMergeCommit    | bool                                                    | Whether the repository allows merge commit                         |
| allowRebaseMerge    | bool                                                    | Whether the repository allows rebase merge                         |
| allowSquashMerge    | bool                                                    | Whether the repository allows squash merge                         |
| hasIssues           | bool                                                    | Whether the repository has open issues                             |
| hasProjects         | bool                                                    | Whether the repository has projects                                |
| hasWiki             | bool                                                    | Whether the repository has a wiki                                  |
| hasPages            | bool                                                    | Whether the repository has pages                                   |
| hasDownloads        | bool                                                    | Whether the repository has downloads                               |
| hasDiscussions      | bool                                                    | Whether the repository has discussions                             |
| isTemplate          | bool                                                    | Whether the repository is an organization repository template      |
| openMergeRequests   | &#91;&#93;[github.mergeRequest](github.mergerequest.md) | List of open merge requests for the repository                     |
| closedMergeRequests | &#91;&#93;[github.mergeRequest](github.mergerequest.md) | List of closed merge requests for the repository                   |
| allMergeRequests    | &#91;&#93;[github.mergeRequest](github.mergerequest.md) | List of all merge requests for the repository                      |
| branches            | &#91;&#93;[github.branch](github.branch.md)             | List of branches for the repository                                |
| defaultBranchName   | string                                                  | Default branch name for the repository                             |
| defaultBranch       | [github.branch](github.branch.md)                       | Default branch                                                     |
| commits             | &#91;&#93;[github.commit](github.commit.md)             | List of commits for the repository                                 |
| contributors        | &#91;&#93;[github.user](github.user.md)                 | List of contributors for the repository                            |
| collaborators       | &#91;&#93;[github.collaborator](github.collaborator.md) | List of all collaborators for the repository                       |
| adminCollaborators  | &#91;&#93;[github.collaborator](github.collaborator.md) | List of admin collaborators for the repository                     |
| files               | &#91;&#93;[github.file](github.file.md)                 | List of files in the repository                                    |
| releases            | &#91;&#93;[github.release](github.release.md)           | List of releases for the repository                                |
| owner               | [github.user](github.user.md)                           | Repository owner                                                   |
| webhooks            | &#91;&#93;[github.webhook](github.webhook.md)           | List of webhooks for the repository                                |
| workflows           | &#91;&#93;[github.workflow](github.workflow.md)         | List of workflows for the repository                               |
| forks               | &#91;&#93;[github.repository](github.repository.md)     | List of repository forks                                           |
| stargazers          | &#91;&#93;[github.user](github.user.md)                 | List of repository stargazers                                      |
| openIssues          | &#91;&#93;[github.issue](github.issue.md)               | List of repository open issues                                     |
| closedIssues        | &#91;&#93;[github.issue](github.issue.md)               | List of repository closed issues                                   |
| license             | [github.license](github.license.md)                     | Repository license                                                 |
| codeOfConductFile   | [github.file](github.file.md)                           | Repository code of conduct                                         |
| supportFile         | [github.file](github.file.md)                           | Repository support file                                            |
| securityFile        | [github.file](github.file.md)                           | Repository security file                                           |
