import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query Posts {
    posts {
      nodes {
        general {
          heroImage {
            sourceUrl
          }
          shortDescription
        }
        date
        categories {
          edges {
            node {
              name
              description
              categoryId
            }
          }
        }
        content
        title
        postId
      }
    }
  }
`;

export default POSTS_QUERY;