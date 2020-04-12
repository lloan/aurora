import gql from 'graphql-tag';

const POST_QUERY = gql`
  query($postId: Int!) { 
    postBy(postId: $postId) {
      general {
          heroImage {
            sourceUrl
          }
          shortDescription
          nextArticle {
            ... on Post {
              id
              postId
              title
            }
          }
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
    }
  }
`;

export default POST_QUERY;
 