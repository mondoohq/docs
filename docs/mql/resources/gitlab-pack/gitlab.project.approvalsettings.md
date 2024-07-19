---
title: gitlab.project.approvalSettings
id: gitlab.project.approvalSettings
sidebar_label: gitlab.project.approvalSettings
displayed_sidebar: MQL
description: GitLab project approval settings
---

# gitlab.project.approvalSettings

**Description**

GitLab project approval settings

**Fields**

| ID                                        | TYPE | DESCRIPTION                                                   |
| ----------------------------------------- | ---- | ------------------------------------------------------------- |
| approvalsBeforeMerge                      | int  | Number of approvals before merge                              |
| resetApprovalsOnPush                      | bool | Whether all approvals are removed when new commits are pushed |
| disableOverridingApproversPerMergeRequest | bool | Disable overriding approvers per merge request                |
| mergeRequestsAuthorApproval               | bool | Whether author of merge request can approve                   |
| mergeRequestsDisableCommittersApproval    | bool | Disable committer's approval for merge request                |
| requirePasswordToApprove                  | bool | Require password to approve                                   |
