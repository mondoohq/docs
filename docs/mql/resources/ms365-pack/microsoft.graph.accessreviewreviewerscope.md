---
title: microsoft.graph.accessReviewReviewerScope
id: microsoft.graph.accessReviewReviewerScope
sidebar_label: microsoft.graph.accessReviewReviewerScope
displayed_sidebar: MQL
description: List of reviewers for the admin consent
---

# microsoft.graph.accessReviewReviewerScope

**Description**

List of reviewers for the admin consent

**Fields**

| ID        | TYPE   | DESCRIPTION                                                                                                                          |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| query     | string | The query specifying who will be the reviewer                                                                                        |
| queryRoot | string | In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query |
| queryType | string | The type of query                                                                                                                    |
