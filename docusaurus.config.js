// @type {import('@docusaurus/types').DocusaurusConfig};

const { themes } = require("prism-react-renderer");

const legacyRedirects = [
  // NOTE: Path / is equivalent to https://mondoo.com/docs/
  //
  //// June 2024 reworked cnquery structure: made a /cloud dir
  {
    from: "/cnquery/cnquery-aws/cnquery-aws-intro",
    to: "/cnquery/cloud/aws",
  },
  {
    from: "/cnquery/cnquery-aws/cnquery-aws-account",
    to: "/cnquery/cloud/aws/account",
  },
  {
    from: "/cnquery/cnquery-aws/cnquery-aws-ec2",
    to: "/cnquery/cloud/aws/ec2",
  },
  {
    from: "/cnquery/cnquery-aws/cnquery-aws-eks",
    to: "/cnquery/cloud/aws/eks",
  },
  {
    from: "/cnquery/cnquery-azure/cnquery-azure-intro",
    to: "/cnquery/cloud/azure",
  },
  {
    from: "/cnquery/cnquery-gcp/cnquery-gcp-intro",
    to: "/cnquery/cloud/gcp",
  },
  {
    from: "/cnquery/cnquery-k8s/cnquery-k8s-cluster",
    to: "/cnquery/cloud/k8s/cluster",
  },
  {
    from: "/cnquery/cnquery-k8s/cnquery-k8s-intro",
    to: "/cnquery/cloud/k8s",
  },
  // June 2024 remove signup info per Chris and Tim
  {
    from: "/platform/start/plat-start-acct/",
    to: "/platform/start/plat-what-is",
  },
  {
    from: "/platform/start/plat-start-2/",
    to: "/platform/start/organize/overview",
  },
  // May 2024 reworked AWS integration stuff when we added hosted aws
  {
    from: "/platform/infra/cloud/aws/aws-integration-faq",
    to: "/platform/infra/cloud/aws/lambda/aws-integration-faq",
  },
  {
    from: "/platform/infra/cloud/aws/aws-integration-troubleshooting",
    to: "/platform/infra/cloud/aws/lambda/aws-integration-troubleshooting",
  },
  {
    from: "/platform/infra/cloud/aws/aws-scan-details",
    to: "/platform/infra/cloud/aws/lambda/aws-scan-details",
  },
  {
    from: "/platform/infra/cloud/aws/aws-ebs-snapshot-scan",
    to: "/cnspec/cloud/aws/aws-ebs-snapshot-scan",
  },
  {
    from: "/platform/infra/cloud/aws/aws-ec2-ic-scan",
    to: "/cnspec/cloud/aws/aws-ec2-ic-scan",
  },
  {
    from: "/platform/infra/cloud/aws/aws-ssm-scan",
    to: "/cnspec/cloud/aws/aws-ssm-scan",
  },
  {
    from: "/platform/infra/cloud/aws/aws-workstation-scan",
    to: "/cnspec/cloud/aws",
  },
  // April 2024 removed separate Find Vulnerabilities subsection from Security section
  // part of Firewatch effort
  {
    from: "/platform/security/vuln/overview",
    to: "/platform/security/overview",
  },
  {
    from: "/platform/security/vuln/vulnerabilities",
    to: "/platform/security/posture/vulnerabilities",
  },
  {
    from: "/platform/security/vuln/advisories",
    to: "/platform/security/posture/advisories",
  },
  //
  // This old CLI topic hang around surprisingly long in the Platform k8s docs
  {
    from: "/platform/infra/cloud/kubernetes/cli",
    to: "/cnspec/cloud/k8s",
  },
  // This is a URL that Mondoo added to AWS resources via the AWS integration CloudFormation
  // Don't delete it unless the product changes:
  {
    from: "/cloud/aws/overview",
    to: "platform/infra/cloud/aws/aws-overview",
  },
  // march 2024 moved cnspec cloud content into one dir
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-account",
    to: "/cnspec/cloud/aws/account",
  },
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-cloudshell",
    to: "/cnspec/cloud/aws/cloudshell",
  },
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-ec2",
    to: "/cnspec/cloud/aws/ec2",
  },
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-eks",
    to: "/cnspec/cloud/aws/eks",
  },
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-packer",
    to: "/cnspec/cloud/aws/packer",
  },
  {
    from: "/cnspec/cnspec-aws/cnspec-aws-intro",
    to: "/cnspec/cloud/aws",
  },
  {
    from: "/cnspec/cnspec-aws",
    to: "/cnspec/cloud/aws",
  },
  {
    from: "/cnspec/cnspec-azure",
    to: "/cnspec/cloud/azure",
  },
  {
    from: "/cnspec/cnspec-azure/cnspec-azure-intro",
    to: "/cnspec/cloud/azure",
  },
  {
    from: "/cnspec/cnspec-gcp",
    to: "/cnspec/cloud/gcp",
  },
  {
    from: "/cnspec/cnspec-gcp/cnspec-gcp-intro",
    to: "/cnspec/cloud/gcp",
  },
  {
    from: "/cnspec/cnspec-gcp/cnspec-gcp-packer",
    to: "/cnspec/cloud/gcp/packer",
  },
  {
    from: "/cnspec/cnspec-gcp/cnspec-gcp-snapshot",
    to: "/cnspec/cloud/gcp/snapshot",
  },
  {
    from: "/cnspec/cnspec-k8s",
    to: "/cnspec/cloud/k8s",
  },
  {
    from: "/cnspec/cnspec-k8s/cnspec-k8s-cluster",
    to: "/cnspec/cloud/k8s/cluster",
  },
  {
    from: "/cnspec/cnspec-k8s/cnspec-k8s-intro",
    to: "/cnspec/cloud/k8s",
  },
  {
    from: "/cnspec/cnspec-k8s/cnspec-k8s-manifest",
    to: "/cnspec/cloud/k8s/manifest",
  },
  {
    from: "/cnspec/cnspec-oci",
    to: "/cnspec/cloud/oci",
  },
  {
    from: "/cnspec/cnspec-oci/cnspec-oci-intro",
    to: "/cnspec/cloud/oci",
  },
  //
  // and march 2024 move
  {
    from: "/getstarted/quickstart",
    to: "/platform/start/plat-what-is",
  },
  {
    from: "/getstarted/overview",
    to: "/platform/start/plat-what-is",
  },
  {
    from: "/cloud/ms365/",
    to: "/platform/infra/saas/ms365/ms365-auto",
  },
  {
    from: "/agent",
    to: "/",
  },
  {
    from: "/server/registration",
    to: "/cnspec/cnspec-adv-install/registration",
  },
  {
    from: "/getstarted/container",
    to: "/cnspec/supplychain/docker",
  },
  {
    from: "/supplychain/cicd/azure-devops",
    to: "/platform/infra/supply/cicd/azure-pipelines",
  },
  {
    from: "/cnquery/cnquery-get-started",
    to: "/cnquery",
  },
  {
    from: "/cnspec/cnspec-get-started",
    to: "/cnspec",
  },
  {
    from: "/references/cli/mondoo",
    to: "/cnspec/cli/cnspec_scan",
  },
];

module.exports = {
  title: "Mondoo Docs",
  tagline: "",
  url: "https://mondoo.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: "true",
  favicon: "img/favicon.png",
  organizationName: "Mondoo", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: legacyRedirects,
        createRedirects(existingPath) {
          // creates a reverse redirect for each new page in platform
          if (existingPath.includes("/platform/infra/cloud")) {
            return [
              existingPath.replace("/platform/infra/cloud", "/platform/cloud"),
            ];
          } else if (existingPath.includes("/platform/infra/opsys")) {
            return [
              existingPath.replace(
                "/platform/infra/opsys",
                "/platform/operating_systems",
              ),
            ];
          } else if (existingPath.includes("/platform/infra/saas")) {
            return [
              existingPath.replace("/platform/infra/saas", "/platform/saas"),
            ];
          } else if (existingPath.includes("/platform/infra/supply")) {
            return [
              existingPath.replace(
                "/platform/infra/supply",
                "/platform/supplychain",
              ),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-WC92BL5", // "Default" GTM Workspace
      },
    ],
  ],
  themeConfig: {
    hubspot: {
      accountId: "HS_ACCOUNTID",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      apiKey: "ALGOLIA_API_KEY",
      indexName: "mondoo",
      contextualSearch: false, // activate if we use versionized docs
      appId: "ALGOLIA_APP_ID",
    },
    prism: {
      theme: themes.nightOwl,
      additionalLanguages: [
        "bash",
        "coffeescript",
        "graphql",
        "json",
        "powershell",
        "python",
        "yaml",
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      //title: "Docs",
      logo: {
        alt: "Mondoo Logo",
        src: "img/mondoo-logo-newpurple.png",
        srcDark: "img/mondoo-logo-newpurple-darkmode.png",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "platform/home",
          label: "Platform",
        },
        {
          type: "doc",
          position: "left",
          docId: "mql/home",
          label: "MQL",
        },
        {
          type: "doc",
          position: "left",
          docId: "cnquery/home",
          label: "cnquery",
        },
        {
          type: "doc",
          position: "left",
          docId: "cnspec/home",
          label: "cnspec",
        },
        {
          type: "dropdown",
          label: "Community",
          position: "right",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/orgs/mondoohq/discussions/",
            },
            {
              label: "Slack",
              href: "https://mondoo.link/slack",
            },
            {
              label: "GitHub Repositories",
              href: "https://github.com/mondoohq/",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Updates",
          position: "right",
          items: [
            { to: "releases", label: "Releases" },
            {
              label: "Blog",
              href: "https://mondoo.com/blog",
            },
          ],
        },
        {
          label: "Mondoo Console",
          href: "https://console.mondoo.com/",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Mondoo",
          items: [
            {
              label: "Mondoo Home",
              href: "https://mondoo.com",
            },
            {
              label: "Mondoo Console",
              href: "https://console.mondoo.com",
            },
            {
              label: "cnquery",
              href: "https://mondoo.com/cnquery",
            },
            {
              label: "cnspec",
              href: "https://mondoo.com/cnspec",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://mondoo.link/slack",
            },
            {
              label: "GitHub",
              href: "https://github.com/mondoohq/",
            },
            {
              label: "Contribute to Mondoo docs",
              href: "https://github.com/mondoohq/docs/",
            },
          ],
        },
        {
          title: "Updates",
          items: [
            { to: "releases", label: "Releases" },
            {
              label: "Status Page",
              href: "https://status.mondoo.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mondoo, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        gtag: {
          trackingID: "G-KK53LDX2YM", // You can also use your "G-" Measurement ID here.
          anonymizeIP: true,
        },
        blog: {
          blogTitle: "Releases",
          blogDescription: "Mondoo Releases",
          path: "releases",
          blogSidebarCount: "ALL",
          routeBasePath: "releases",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            title: "Mondoo Releases",
            description:
              "Keep up to date with the latest features in each release from Mondoo",
            copyright: `Copyright © ${new Date().getFullYear()} Mondoo, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          lastmod: "date",
          ignorePatterns: ["**/releases/tags/**"],
          priority: 0.5,
        },
      },
    ],
  ],
};
