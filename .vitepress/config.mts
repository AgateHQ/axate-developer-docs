import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Axate Developer Documentation',
  description: 'Integration guides and API documentation for the Axate payment wallet.',
  base: '/axate-developer-docs/',
  cleanUrls: true,
  srcExclude: ['README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#087f5b' }],
    ['link', { rel: 'icon', href: '/axate-developer-docs/images/logo-axate-dark-transparent.svg' }]
  ],
  themeConfig: {
    logo: '/images/logo-axate-dark-transparent.svg',
    siteTitle: 'Axate Docs',
    nav: [
      { text: 'Guide', link: '/docs/' },
      { text: 'APIs', link: '/docs/content-api' },
      { text: 'Troubleshooting', link: '/docs/troubleshooting' }
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Integrating with Axate', link: '/docs/' },
          { text: 'Testing and go live', link: '/docs/testing-and-go-live' },
          { text: 'Selective loading', link: '/docs/selective_loading' },
          { text: 'Browser support', link: '/docs/browser-support' }
        ]
      },
      {
        text: 'APIs and configuration',
        items: [
          { text: 'Content API', link: '/docs/content-api' },
          { text: 'WordPress API', link: '/docs/wordpress-api' },
          { text: 'Subscriptions', link: '/docs/subscriptions-api' },
          { text: 'Analytics hooks', link: '/docs/analytics-hooks' },
          { text: 'Marketing consents', link: '/docs/marketing-consents' },
          { text: 'First-party cookies', link: '/docs/first-party-cookies' },
          { text: 'Data sharing API', link: '/data-sharing' }
        ]
      },
      {
        text: 'AMP',
        items: [
          { text: 'Overview', link: '/docs/amp/' },
          { text: 'Integration', link: '/docs/amp/amp-integration' },
          { text: 'WordPress', link: '/docs/amp/amp-and-wordpress' },
          { text: 'Troubleshooting', link: '/docs/amp/troubleshooting-amp' }
        ]
      },
      {
        text: 'Help and research',
        items: [
          { text: 'Troubleshooting', link: '/docs/troubleshooting' },
          { text: 'Facebook Instant Articles', link: '/docs/research/facebook-instant-articles' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AgateHQ/axate-developer-docs' }
    ],
    editLink: {
      pattern: 'https://github.com/AgateHQ/axate-developer-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    footer: {
      message: 'Axate developer documentation',
      copyright: 'Copyright © Axate'
    }
  }
})
