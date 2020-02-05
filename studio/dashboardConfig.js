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
                  buildHookId: '5e3b0797930cbe08c5444f98',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-er5iz59g',
                  apiId: 'c3ce5ed0-fa65-430d-8d3e-a91f87278818'
                },
                {
                  buildHookId: '5e3b0798b71e67789dbe74f7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-yqicups6',
                  apiId: 'c3f665ee-ece7-4457-9a7d-db1b7da7291a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt-j-deasy/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-yqicups6.netlify.com', category: 'apps' }
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
