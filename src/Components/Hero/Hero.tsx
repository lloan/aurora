import { useQuery } from '@apollo/react-hooks';
import POSTS_QUERY from '../../../queries/posts.query';
import Link from 'next/link'
import Image from '../Slide/Image';
import Slide from '../Slide/Slide';

type Post = {
  id: string
  heroTitle: string
  shortDescription: string
  date: string
  category: string
  categoryId: string
}

type Image = {
  heroImage: string,
  id: string,
  title: string,
}

const Hero = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);
  const posts = data ? data.posts.nodes : false;
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {JSON.stringify(error)}</p>;
  // }
  console.log(posts);
  return (
    <header className="hero">
      <div className="slider slider-horizontal">
        <div className="slider__caption swiper-container">
          <div className="swiper-wrapper">

            {posts &&
              posts.map(post => {
                const heroPost = {
                  id: post.postId,
                  heroTitle: post.general.heroTitle,
                  shortDescription: post.general.shortDescription,
                  date: post.date,
                  category: post.categories.edges[0].node.name,
                  categoryId: post.categories.edges[0].node.categoryId,
                } as Post

                console.log(heroPost);
                return <Slide data={heroPost} />;
              }
              )
            }


          </div>
        </div>

        <div className="slider__image swiper-container reveal">
          <div className="swiper-wrapper">

            {posts &&
              posts.map(post => {
                const heroPostImage = {
                  id: post.postId,
                  title: post.title,
                  heroImage: post.general.heroImage.sourceUrl,
                } as Image

                console.log(heroPostImage);
                return <Image data={heroPostImage} />;
              }
              )
            }

          </div>
        </div>


        <div className="control-slider control-slider--vertical swiper-control">
          <div></div>
          <div className="swiper-pagination"></div>
          <div>
            <div className="swiper-button-next zoom-cursor">
              <svg className="slider-nav slider-nav--progress" viewBox="0 0 46 46">
                <g className="slider-nav__path-progress slider-nav__path-progress--gray">
                  <path d="M0.5,23a22.5,22.5 0 1,0 45,0a22.5,22.5 0 1,0 -45,0" />
                </g>
              </svg>
              <svg className="slider-nav slider-nav--gray" viewBox="0 0 46 46">
                <circle className="slider-nav__path--gray" cx="23" cy="23" r="22.5" />
                <path className="slider-nav__arrow" d="M26.45 22.45l-4.91-4.91a.7707464.7707464 0 0 0-1.09 1.09L24.82 23l-4.36 4.36a.7707464.7707464 0 0 0 1.09 1.09l4.91-4.91a.77.77 0 0 0-.01-1.09z" />
              </svg>
            </div>
            <div className="swiper-button-prev zoom-cursor">
              <svg className="slider-nav slider-nav--gray" viewBox="0 0 46 46">
                <circle className="slider-nav__path--gray" cx="23" cy="23" r="22.5" />
                <path className="slider-nav__arrow" d="M18.5 23.55l4.91 4.91a.7707464.7707464 0 1 0 1.09-1.09L20.14 23l4.36-4.36a.7707464.7707464 0 0 0-1.09-1.09l-4.91 4.9a.77.77 0 0 0 0 1.1z" />
              </svg>
            </div>
          </div>
        </div>


        <div className="social social--floating">
          <a className="social__link" href="#">GitHub</a>
          <a className="social__link" href="#">LinkedIn</a>
          <a className="social__link" href="#">StackOverflow</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;