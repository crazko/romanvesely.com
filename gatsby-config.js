module.exports = {
  siteMetadata: {
    url: 'https://romanvesely.com',
    title: 'Roman Veselý',
    subtitle: 'Interested in web and stuff',
    author: 'Roman Veselý',
    email: 'info@romanvesely.com',
    image: 'favicon.ico',
    codes: {
      disqus: 'roman-vesely-notes',
    },
    gravatar: {
      email: 'crazko@gmail.com',
      url: 'https://www.gravatar.com/avatar/',
    },
    github: 'https://github.com/crazko/romanvesely.com/tree/master/src',
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
        gatsbyRemarkPlugins: ['gatsby-remark-embedder', 'gatsby-remark-images'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sharp',
  ],
};
