# Mondoo documentation

This repo contains the open source Mondoo documentation, which includes Mondoo, cnspec, cnquery, and MQL. It's built using [Docusaurus 3](https://docusaurus.io/), deployed to a Google Cloud Storage bucket, and published at [mondoo.com/docs](https://mondoo.com/docs/).

## Want to contribute to the Mondoo docs?

Great! If you're just fixing a typo or making a small change to an existing topic, just submit a merge request in this repo. For larger contributions, please create a GitHub issue in this repo to discuss the changes before you begin.

## Install Docusaurus locally

Install Docusaurus environment so you can build and test your contributions.

### Install Node and Yarn

This project uses Node.js version 20 and the Yarn package manager. If you don't already have these installed:

- [Get Node.js](https://nodejs.org/en/download/)
- [Get Yarn](https://yarnpkg.com/getting-started/install)

Note: Make sure to follow the instructions to update your shell's profile for Node.

### Install Docusaurus and other dependencies

To set up Docusaurus and its dependencies, run this command:

```bash
yarn install
```

## Make changes

To make a small fix, just find the source file and go for it! For larger changes, please create an issue here in GitHub so we can discuss it before you begin.

### Find the files

The markdown files that form the content of the docs are in the `/docs` directory. The Releases blog is in the `/releases` directory. Find images in `/static/img`.

Note: We programmatically generate MQL resource and cnspec/cnquery command line reference topics from .lr and .yaml files in the [mondoohq/cnquery](https://github.com/mondoohq/cnquery) codebase. To make changes to those references docs, you must change the source content in the cnquery repo. Our tools regularly overwrite any changes made to that content the docs repo.

### Follow our style

Until we make our documentation style guide public, please try to follow the [Google
developer documentation style guide](https://developers.google.com/style). With a few exceptions, that's what we do.

## Locally build and test the Mondoo docs

To generate a local build of the Mondoo docs, run this command:

```bash
make serve
```

Docusaurus generates the static content in the `build/` directory and launches a preview in your default web browser on a local development server (by default http://localhost:3000).

## Request to merge

Submit a request to merge your branch. We accept only [signed Git commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits).

Thank you for your contribution!

## Legal

- **Copyright:** 2018-2024, Mondoo, Inc.
- **License:** MPL 2.0
