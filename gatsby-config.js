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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'log',
        path: `${__dirname}/src/log/`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '700'],
          },
          {
            family: 'Merriweather',
            variants: ['400'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/templates/Page.jsx`),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-embedder',
          // 'gatsby-remark-images',
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
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(log => {
                var id = log.fileAbsolutePath
                  .split('/')
                  .pop()
                  .split('.')[0];
                return {
                  title: id,
                  description: log.html,
                  guid: id,
                  url: `${site.siteMetadata.url}/log#log${id}`,
                };
              });
            },
            setup: ({
              query: {
                site: {
                  siteMetadata: { url },
                },
              },
            }) => ({
              title: 'Learning Log',
              description: 'Collection of interesting news, resources, tips or issues and their solutions.',
              feed_url: `${url}/log.xml`,
              site_url: `${url}/log`,
            }),
            query: `
              {
                allMdx(filter: {fileAbsolutePath: {regex: "/src/log/"}}, sort: {fields: fileAbsolutePath, order: DESC}) {
                  nodes {
                    html
                    fileAbsolutePath
                  }
                }
              }
            `,
            output: '/log.xml',
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
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'theme--dark',
        classNameLight: 'theme--light',
      },
    },
  ],
};
