module.exports = {
  siteMetadata: {
    url: 'https://romanvesely.com',
    name: 'Roman Veselý',
    description: 'Personal blog',
    email: 'info@romanvesely.com',
    image: 'favicon.ico',
    codes: {
      disqus: 'roman-vesely-notes',
    },
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-twitter',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4520387-26',
      },
    },
  ],
};
