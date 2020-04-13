import React from 'react';
import Head from 'next/head';

import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import Article from '../src/Components/Article/Article';

const Home = (props) => {
  const { id } = props.query;
  console.log(props);
	return (
		<div>
			<Head>
				<title>Article</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<Navbar />
      <Article postId={id} />
		</div>
	);
};


Home.getInitialProps = ({ query }) => {
  console.log({query});
  return {query}
}

export default Home;
