import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            url
            title
            subtitle
            author
            email
            image
            codes {
              disqus
            }
            gravatar {
              email
              url
            }
            github
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
