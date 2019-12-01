const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slugish = createFilePath({ node, getNode, basePath: 'src/posts' });
    const re = /(\d{4}-\d{2}-\d{2})-([\w|-]*)/g;
    const matches = re.exec(slugish);

    if (matches) {
      const date = matches[1];
      const slug = matches[2];

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      createNodeField({
        node,
        name: 'date',
        value: date,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  posts.data.allMdx.nodes.forEach(node => {
    if (node.fields) {
      const slug = node.fields.slug;

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/Post.jsx`),
        context: {
          slug,
        },
      });
    }
  });
};
