---
title: Manage Query Output
id: cnquery-format-results
sidebar_label: Manage Query Output
displayed_sidebar: cnquery
sidebar_position: 5
description: Learn what you can do with the output of cnquery queries
image: /img/featured_img/mondoo-feature.jpg
---

You can see verbose query results, output results to JSON, and share results with your team.

## See verbose query results​

To see detailed progress as the query runs, use `-v` or `--verbose`. For example:

```bash
cnquery run local -c "services.list{ * }" -v
```

## Output results to JSON​

To convert the output of your query to JSON, use `-j` or `--json`. For example:

```bash
cnquery run local -c "services.list{ * }" -j
```

You can then pipe the output to jq or other applications.

---
