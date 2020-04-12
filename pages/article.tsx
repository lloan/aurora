import React from 'react';
import Head from 'next/head';


import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import Article from '../src/Components/Article/Article';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Article</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<Navbar />
			<Article />
		</div>
	);
};

export default Home;