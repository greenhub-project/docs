module.exports = {
  title: 'GreenHub',
  description: 'GreenHub is a collaborative approach to power consumption analysis of Android devices',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }]
  ],
  themeConfig: {
    repo: 'greenhub-project/docs',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api-reference/' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/ecosystem'
        ]
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          '/api/getting-started',
          '/api/schema',
          '/api/authentication',
          '/api/rate-limiting',
          '/api/pagination'
        ]
      },
      {
        title: 'Modules',
        collapsable: false,
        children: [
          '/modules/batteryhub',
          '/modules/farmer',
          '/modules/lumberjack'
        ]
      },
      {
        title: 'Meta',
        collapsable: false,
        children: [
          '/meta/faq'
        ]
      }
    ]
  }
}

function genSidebarConfig (title, children = [''], collapsable = false) {
  return [
    {
      title,
      collapsable,
      children
    }
  ]
}