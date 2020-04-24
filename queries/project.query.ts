import gql from 'graphql-tag';

const PROJECT_QUERY = gql`
query($projectId: Int!) { 
  projectBy(projectId: $projectId) { 
    title
    project {
      details {
        category
        client
        heroDescription
        heroTitle
        link
        year
      }
      heroImage {
        sourceUrl
      }
      main {
        description
        title
        image {
          sourceUrl
        }
      } 
      summarizingImage {
        sourceUrl
      }
      slider {
        description
        title
        images {
          sourceUrl
        }
      }
    }
    terms {
      ... on Category {
        categoryId
        name
      }
    }
  }
}
`;

export default PROJECT_QUERY;
 