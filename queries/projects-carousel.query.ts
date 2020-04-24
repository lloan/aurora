import gql from 'graphql-tag';

const PROJECTS_CAROUSEL_QUERY = gql`
  query Projects {
    projects {
      nodes {
        id
      }
    }
  }

`;

export default PROJECTS_CAROUSEL_QUERY;