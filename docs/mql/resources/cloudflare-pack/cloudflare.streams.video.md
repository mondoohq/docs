---
title: cloudflare.streams.video
id: cloudflare.streams.video
sidebar_label: cloudflare.streams.video
displayed_sidebar: MQL
description: Cloudflare videos and recordings
---

# cloudflare.streams.video

**Description**

Cloudflare videos and recordings

**Fields**

| ID                    | TYPE   | DESCRIPTION                                                                                                                                                                                                                                                                                                |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string | cnquery resource id                                                                                                                                                                                                                                                                                        |
| uid                   | string | Unique identifier                                                                                                                                                                                                                                                                                          |
| name                  | string | Name                                                                                                                                                                                                                                                                                                       |
| creator               | string | Creator ID                                                                                                                                                                                                                                                                                                 |
| duration              | float  | Video duration in seconds                                                                                                                                                                                                                                                                                  |
| height                | int    | Height (px)                                                                                                                                                                                                                                                                                                |
| width                 | int    | Width (px)                                                                                                                                                                                                                                                                                                 |
| liveInput             | string | Live input ID                                                                                                                                                                                                                                                                                              |
| dash                  | string | Dash URL                                                                                                                                                                                                                                                                                                   |
| hls                   | string | HLS URL                                                                                                                                                                                                                                                                                                    |
| preview               | string | Preview URL                                                                                                                                                                                                                                                                                                |
| ready                 | bool   | Whether the video is ready to stream                                                                                                                                                                                                                                                                       |
| requireSignedUrls     | bool   | Whether the video can be a accessed using the UID                                                                                                                                                                                                                                                          |
| scheduledDeletion     | time   | Date and time at which the video will be deleted (No value or a null value means that the video won't be deleted.)                                                                                                                                                                                         |
| size                  | int    | Size in Bytes                                                                                                                                                                                                                                                                                              |
| thumbnail             | string | Thumbnail URL                                                                                                                                                                                                                                                                                              |
| thumbnailTimestampPct | float  | Timestamp for a thumbnail image, calculated as a percentage value of the video's duration (To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video. If this value is not set, the default thumbnail image is taken from 0s of the video.) |
| uploaded              | time   | Time the video was uploaded                                                                                                                                                                                                                                                                                |
