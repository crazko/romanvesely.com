module.exports = {
  siteMetadata: {
    url: 'https://romanvesely.com',
    name: 'Roman Veselý',
    description: 'Personal blog. Notes not only about web development.',
    email: 'info@romanvesely.com',
    image: 'meta.png',
    gravatar: {
      email: 'crazko@gmail.com',
      url: 'https://www.gravatar.com/avatar/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/templates/Page.jsx`),
        },
        // gatsbyRemarkPlugins: ['gatsby-remark-embedder', 'gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-embedder',
          { resolve: 'gatsby-remark-prismjs', options: { noInlineHighlight: true } },
        ],
      },
    },
    'gatsby-transformer-xml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-twitter',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                name
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(post => {
                return Object.assign({}, post.frontmatter, {
                  title: post.frontmatter.title,
                  description: post.frontmatter.description,
                  date: post.fields.date,
                  url: `${site.siteMetadata.url}/${post.fields.slug}`,
                  guid: `${site.siteMetadata.url}/${post.fields.slug}`,
                  custom_elements: [{ 'dc:creator': site.siteMetadata.name }],
                });
              });
            },
            setup: ({
              query: {
                site: {
                  siteMetadata: { url, name, description },
                },
              },
            }) => ({
              title: name,
              description: description,
              feed_url: `${url}/rss.xml`,
              site_url: url,
            }),
            query: `
              {
                allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {fields: fields___date, order: DESC}) {
                  nodes {
                    frontmatter {
                      description
                      title
                    }
                    fields {
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'roman-vesely-notes',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4520387-26',
      },
    },
  ],
};
