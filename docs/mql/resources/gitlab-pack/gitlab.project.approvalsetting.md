---
title: gitlab.project.approvalSetting
id: gitlab.project.approvalSetting
sidebar_label: gitlab.project.approvalSetting
displayed_sidebar: MQL
description: GitLab project approval settings
---

# gitlab.project.approvalSetting

**Description**

GitLab project approval settings

**Fields**

| ID                                        | TYPE | DESCRIPTION                                                                          |
| ----------------------------------------- | ---- | ------------------------------------------------------------------------------------ |
| approvalsBeforeMerge                      | int  | Number of approvals before merge                                                     |
| resetApprovalsOnPush                      | bool | Whether all approvals are removed when new commits are pushed                        |
| disableOverridingApproversPerMergeRequest | bool | Whether users are prevented from overriding an approver per merge request            |
| mergeRequestsAuthorApproval               | bool | Whether author of merge request can approve                                          |
| mergeRequestsDisableCommittersApproval    | bool | Whether users are prevented from overriding a committer's approval for merge request |
| requirePasswordToApprove                  | bool | Whether a password is required to approve                                            |
