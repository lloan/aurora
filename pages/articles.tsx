import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import POST_TITLE_QUERY from '../queries/post-title.query';
import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import Article from '../src/Components/ArticleContent/ArticleContent';

const Home = (props) => {
  const { id } = props.query;
  const { data, loading, error } = useQuery(POST_TITLE_QUERY, {
    variables: {
      postId: id
    }
  });
  const title = data ? data.postBy.title + " - Lloan Alas": "Article";

	return (
		<div>
			<Head>
        <title>{title}</title>
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
