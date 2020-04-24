import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import PROJECT_QUERY from '../queries/post-title.query';
import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import ProjectContent from '../src/Components/ProjectContent/ProjectContent';

const Home = (props) => {
  const { id } = props.query;
  const { data, loading, error } = useQuery(PROJECT_QUERY, {
    variables: {
      projectId: id
    }
  });
 
	return (
		<div>
			<Head>
        <title>Project</title>
			</Head>
			<Menu />
			<Navbar />
      <ProjectContent projectId={id} />
		</div>
	);
};


Home.getInitialProps = ({ query }) => {
  console.log({query});
  return {query}
}

export default Home;
