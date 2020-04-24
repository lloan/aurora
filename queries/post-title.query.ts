import gql from 'graphql-tag';

const POST_TITLE_QUERY = gql`
  query($postId: Int!) { 
    postBy(postId: $postId) {
        title
    }
  }
`;

export default POST_TITLE_QUERY;
 