// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' ',
  tagline: '',
  url: '/docs/intro.md',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/linux.png',
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: '#',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
      },
      footer: {
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Volkan Çalışkan, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
