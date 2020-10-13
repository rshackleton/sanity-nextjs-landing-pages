export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f85cdde1179eb4823706afe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y43rm7ix',
                  apiId: 'f87fbd06-4e7a-4d02-998d-14e8f985c0f3'
                },
                {
                  buildHookId: '5f85cddfc2590735008b8df8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1mmkn6ze',
                  apiId: 'e7f45c87-e89e-472f-824b-736938609592'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rshackleton/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1mmkn6ze.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
