import React from 'react';
import moment from "moment";
import { useQuery } from '@apollo/react-hooks';
import POST_QUERY from '../../../queries/post.query'; 

type Article = {
  heroImage: string
  date: string
  content: string
  category: string
  title: string
  nextArticle: {
    title: string
    postId: string
  }
}

function ArticleContent(props) {
  const { postId } = props; 
  const { data, loading, error } = useQuery(POST_QUERY, {
    variables: {
      postId 
    }
  });

  const article = data ? {
    date: data.postBy.date,
    category: data.postBy.categories.edges[0].node.name,
    heroImage: data.postBy.general.heroImage.sourceUrl,
    content: data.postBy.content,
    title: data.postBy.title,
    nextArticle: {
      title: data.postBy.general.nextArticle.title,
      postId: data.postBy.general.nextArticle.postId,
    }
  } as Article : false;

  return (
    article && <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <header className="header-page header-page--half">
              <h6 className="title title--overhead title--tail">Article / {moment(article.date).format("MMMM Do, Y")}</h6>
              <h1 className="title title--display-1 weight--300 js-lines">{article.title}</h1>
            </header>
          </div>

          <div className="col-12 col-lg-9">
            <figure className="single-news__media reveal">
              <img className="single-news__image cover lazyload" src={article.heroImage} alt="News" />
            </figure>

            <div className="date mb--2 js-lines">by Lloan Alas</div>
          </div>

          <div id="article-content" className="col-12 col-lg-9" dangerouslySetInnerHTML={
            { __html: article.content as string }
          } />

          <footer className="col-12 col-lg-9">
            <div className="share-post js-block"> 
              <a href="https://github.com/lloan"><i className="fab fa-github"></i><span>GitHub</span></a>
              <a href="https://linkedin.com/in/lloan"><i className="fab fa-linkedin-in"></i><span>Linkedin</span></a>
              <a href="https://stackoverflow.com/users/2424622/lloan"><i className="fab fa-stack-overflow"></i><span>StackOverflow</span></a>
            </div>
          </footer>

        </div>
      </div>

      <nav className="page-nav page-nav__single">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title title--overhead js-lines mb--2">Next Article</div>
            </div>
            <div className="col-12 col-lg-6 js-block">
              <h6 className="title title--h5 triger-hl">
              <a className="decoration--none" href={`article?id=${article.nextArticle.postId}`}>
                    <span className="hover-line">{article.nextArticle.title}</span>
                  </a>
              </h6>
              <a className="btn-link" href={`article?id=${article.nextArticle.postId}`}>
                  <i className="circle icon-right-open"></i>
                </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default ArticleContent;
