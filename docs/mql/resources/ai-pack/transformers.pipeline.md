---
title: transformers.pipeline
id: transformers.pipeline
sidebar_label: transformers.pipeline
displayed_sidebar: MQL
description: Transformers Pipeline
---

# transformers.pipeline

**Description**

Transformers Pipeline

**Fields**

| ID           | TYPE             | DESCRIPTION                                       |
| ------------ | ---------------- | ------------------------------------------------- |
| name         | string           | Name                                              |
| task         | string           | Task eg. "text-generation", "text-classification" |
| model        | string           | Model                                             |
| onnxFilePath | string           | ONNX file path                                    |
| inputs       | &#91;&#93;string | Inputs                                            |
| results      | &#91;&#93;dict   | Results                                           |
