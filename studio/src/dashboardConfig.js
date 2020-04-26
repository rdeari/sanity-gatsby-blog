export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea5f4fed4cde2de5c69cf51',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mn1z7fts',
                  apiId: 'a2c46f26-7d0e-4337-bbe0-476ec7fe4208'
                },
                {
                  buildHookId: '5ea5f4fe1a021b8b050baf6a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ut38x7he',
                  apiId: '42ce8d94-b801-4584-ab91-3139107e2d28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rdeari/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ut38x7he.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
