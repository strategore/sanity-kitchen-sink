export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60260c1c7e09724c2b3688d0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r1r9uadt',
                  apiId: 'e5e0d078-0214-4527-8b98-733ce35d730e'
                },
                {
                  buildHookId: '60260c1c1c30bf429de21617',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xbujooxn',
                  apiId: '5463a6e9-2d4f-400b-901d-4fd486bfbf6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strategore/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xbujooxn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
