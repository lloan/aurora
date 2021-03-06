import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import POST_TITLE_QUERY from '../queries/post-title.query';
import Navbar from '../src/Components/Navbar/Navbar'; 
import Menu from '../src/Components/Menu/Menu';
import ArticleContent from '../src/Components/ArticleContent/ArticleContent';

const Article = (props) => {
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
      <ArticleContent postId={id} />
		</div>
	);
};

Article.getInitialProps = ({ query }) => {
  console.log({query});
  return {query}
}

export default Article;
