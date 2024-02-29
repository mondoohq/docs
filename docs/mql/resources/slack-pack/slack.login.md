---
title: slack.login
id: slack.login
sidebar_label: slack.login
displayed_sidebar: MQL
description: Slack access log entry
---

# slack.login

**Description**

Slack access log entry

**Fields**

| ID        | TYPE   | DESCRIPTION                                                             |
| --------- | ------ | ----------------------------------------------------------------------- |
| userID    | string | User ID                                                                 |
| username  | string | User's handle                                                           |
| count     | int    | Total number of access log entries for that combination                 |
| ip        | string | IP address of the device used                                           |
| userAgent | string | User agent string from the browser or client application                |
| isp       | string | Best guess at the internet service provider                             |
| country   | string | Best guesses at where the access originated, based on the IP address    |
| region    | string | Best guesses at where the access originated, based on the IP address    |
| dateFirst | time   | First access log entry for user, IP address, and user agent combination |
| dateLast  | time   | Most recent log entry for user, IP address, and user agent combination  |
