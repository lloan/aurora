import React from 'react';
import Head from 'next/head'; 
import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Menu from '../src/Components/Menu/Menu';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<Navbar />
			<Hero />
		</div>
	);
};

export default Home;