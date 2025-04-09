---
title: gcp.project.storageService.bucket.lifecycleRuleCondition
id: gcp.project.storageService.bucket.lifecycleRuleCondition
sidebar_label: gcp.project.storageService.bucket.lifecycleRuleCondition
displayed_sidebar: MQL
description: The condition(s) under which the action will be taken
---

# gcp.project.storageService.bucket.lifecycleRuleCondition

**Supported platform**

- gcp

**Description**

The condition(s) under which the action will be taken

**Fields**

| ID                      | TYPE             | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| age                     | int              | Age of an object (in days). This condition is satisfied when an object, reaches the specified age                                                                                                                                                                                                                                                                                                  |
| createdBefore           | string           | CreatedBefore: A date in RFC 3339 format with only the date part (for, instance, "2013-01-15"). This condition is satisfied when an object is, created before midnight of the specified date in UTC                                                                                                                                                                                                |
| customTimeBefore        | string           | CustomTimeBefore: A date in RFC 3339 format with only the date part (for, instance, "2013-01-15"). This condition is satisfied when the custom time on, an object is before this date in UTC                                                                                                                                                                                                       |
| daysSinceCustomTime     | int              | DaysSinceCustomTime: Number of days elapsed since the user-specified, timestamp set on an object. The condition is satisfied if the days elapsed, is at least this number. If no custom timestamp is specified on an object,, the condition does not apply                                                                                                                                         |
| daysSinceNoncurrentTime | int              | DaysSinceNoncurrentTime: Number of days elapsed since the noncurrent, timestamp of an object. The condition is satisfied if the days elapsed is at, least this number. This condition is relevant only for versioned objects., The value of the field must be a nonnegative integer. If it's zero, the, object version will become eligible for Lifecycle action as soon as it, becomes noncurrent |
| isLive                  | bool             | IsLive: Relevant only for versioned objects. If the value is true, this, condition matches live objects; if the value is false, it matches archived, objects                                                                                                                                                                                                                                       |
| matchesPattern          | string           | MatchesPattern: A regular expression that satisfies the RE2 syntax. This, condition is satisfied when the name of the object matches the RE2 pattern                                                                                                                                                                                                                                               |
| matchesPrefix           | &#91;&#93;string | MatchesPrefix: List of object name prefixes. This condition will be, satisfied when at least one of the prefixes exactly matches the beginning of, the object name                                                                                                                                                                                                                                 |
| matchesStorageClass     | &#91;&#93;string | MatchesStorageClass: Objects having any of the storage classes specified by, this condition will be matched                                                                                                                                                                                                                                                                                        |
| matchesSuffix           | &#91;&#93;string | MatchesSuffix: List of object name suffixes. This condition will be, satisfied when at least one of the suffixes exactly matches the end of the, object name                                                                                                                                                                                                                                       |
| noncurrentTimeBefore    | string           | NoncurrentTimeBefore: A date in RFC 3339 format with only the date part (for, instance, "2013-01-15"). This condition is satisfied when the noncurrent, time on an object is before this date in UTC. This condition is relevant, only for versioned objects                                                                                                                                       |
| numNewerVersions        | int              | NumNewerVersions: Relevant only for versioned objects. If the value is N,, this condition is satisfied when there are at least N versions (including, the live version) newer than this version of the object                                                                                                                                                                                      |
