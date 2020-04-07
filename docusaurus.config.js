module.exports = {
  title: 'Phase Two',
  tagline: 'Tools for SaaS builders',
  url: 'https://p2-inc.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'p2-inc', // Usually your GitHub org/user name.
  projectName: 'p2-inc.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Phase Two',
        src: 'img/logo_phase_slash.svg',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
	{
          href: 'https://app.phasetwo.io/auth/admin/master/console/',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Phase Two',
          items: [
            {
              label: 'Privacy policy',
              to: 'docs/privacy',
            },
            {
              label: 'Terms of use',
              to: 'docs/terms',
            },
	    {
	      label: 'support@phasetwo.io',
	      href: 'mailto:support@phasetwo.io'
	    }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Phase Two, Inc.`,
    },
    disableDarkMode: true,
    googleAnalytics: {
      trackingID: 'UA-160183620-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/p2-inc/phasetwo-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};