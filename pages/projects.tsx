import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import PROJECTS_CAROUSEL_QUERY from '../queries/projects-carousel.query';
import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import ProjectCarousel from '../src/Components/ProjectCarousel/ProjectCarousel';

const Projects = (props) => {   
	return (
		<div>
			<Head>
        <title> </title>
			</Head>
			<Menu />
			<Navbar />
      <ProjectCarousel/>
		</div>
	);
};
 
export default Projects;
