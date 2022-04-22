
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */

module.exports = {
  title: ' ',
  tagline: '',
  url: '/docs/intro.md',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/linux.png',
  projectName: 'docusaurus',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: '#',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Volkan Çalışkan',
        src: 'img/linux.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documents',
        },
        {
          href: 'https://github.com/birseykoo',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/birseykoo',
          label: 'Twitter',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      links: [],
      "copyright": "Copyright © 2022 Volkan Çalışkan, Inc. Built with Docusaurus.",
      style: 'dark',
    },

    prism:{
      theme: darkCodeTheme,
      darkTheme: {
        ...darkCodeTheme,
        plain:{
          backgroundColor: '#454545',
          color: 'orange',
          padding: '0.3em',
          borderRadius: '1em',
          height: 'auto',
          fontSize: '16px',
          fontFamily: 'monospace',
        }
      }

    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false
    },
    metadata: [
      {
        name: "description",
        content: "Volkan Çalışkan's personal website"
      },
      {
        name: "keywords",
      },
    ],
    autoCollapseSidebarCategories: false,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    }
  },
};
