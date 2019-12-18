import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            url
            name
            description
            email
            image
            gravatar {
              email
              url
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
