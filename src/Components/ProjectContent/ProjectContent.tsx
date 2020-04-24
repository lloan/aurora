import React from 'react';
import moment from "moment";
import { useQuery } from '@apollo/react-hooks';
import PROJECT_QUERY from '../../../queries/project.query';
import { ApolloClient } from 'apollo-client';

type Project = {
  title
  details: {
    category
    client
    heroDescription
    heroTitle
    link
    year
  }
  main: {
    description
    title
    image
  }
  summarizingImage
  heroImage
  slider: {
    description
    title
    images
  }
  category: {
    name
    id
  }
}

function ProjectContent(props) {
  const { projectId } = props;
  const { data, loading, error } = useQuery(PROJECT_QUERY, {
    variables: {
      projectId
    }
  });
  
  const { title, project, terms } = data ? data.projectBy : false;
  const { details, main, summarizingImage, slider, heroImage } = data ? project : false;
  // project
  const p = project ? {
    title,
    details,
    main: {
      description: main.description,
      title: main.title,
      image: main.image.sourceUrl,
    },
    summarizingImage: summarizingImage.sourceUrl,
    heroImage: heroImage.sourceUrl,
    slider,
    category: {
      name: terms[0].name,
      id: terms[0].categoryId
    }

  } as Project : false;

  console.log(p);

  return (
    p && <>
      <section className="project-single">

        <header className="header-page header-page--half js-opacity">
          <div className="container">

            <h6 className="title title--overhead title--tail">Project</h6>
            <h1 className="title title--display-1 js-lines" dangerouslySetInnerHTML={{__html: `${p.title}`}} />

          </div>
        </header>



        <figure className="image-container jarallax reveal">
          <img className="jarallax-img cover lazyload" src={p.heroImage} alt="" />
        </figure>


        <div className="container">

          <div className="case-details">
            <div className="item-details">
              <span className="item-details__title title--overhead">Client</span>
              <span className="item-details__text">{p.details.client}</span>
            </div>
            <div className="item-details">
              <span className="item-details__title title--overhead">Year</span>
              <span className="item-details__text">{p.details.year}</span>
            </div>
            <div className="item-details">
              <span className="item-details__title title--overhead">Role</span>
              <span className="item-details__text">{p.category.name}</span>
            </div>
            <div className="item-details item-details--end">
              <a className="btn-link" href={p.details.link}>See Website<i className="circle circle--right icon-right-open"></i></a>
            </div>
          </div>

        </div>

        <article className="caption-single container">
          <div className="row">
            <div className="col-12 col-lg-2"><span className="num-article">01 —</span></div>
            <div className="col-12 col-lg-9">
              <h2 className="title title--h4 js-lines" dangerouslySetInnerHTML={{__html: `${p.details.heroTitle}`}}/>
              <div className="description js-block" dangerouslySetInnerHTML={{__html: `${p.details.heroDescription}`}} />
            </div>
          </div>
        </article>


        <figure className="image-container image-container--gutters reveal">
          <img className="cover lazyload" src={p.main.image} alt="" />
        </figure>


        <article className="caption-single container">
          <div className="row">
            <div className="col-12 col-lg-2"><span className="num-article">02 —</span></div>
            <div className="col-12 col-lg-9">
              <h2 className="title title--h4 js-lines" dangerouslySetInnerHTML={{__html: `${p.main.title}`}} />
              <div className="description js-block"  dangerouslySetInnerHTML={{__html: `${p.main.description}`}} />
            </div>
          </div>
        </article>


        <div className="slider slider-simply image-container--half reveal">
          <div className="slider-article swiper-container">
            <div className="swiper-wrapper">
              {
                p.slider.images.map((slide, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <div className="cover-slider lazyload" data-bg={slide.sourceUrl}></div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="control-slider control-slider--bottom swiper-control">
            <div className="swiper-button-next swiper-button-next--square zoom-cursor">
              <i className="icon-up-open"></i>
            </div>
            <div className="swiper-button-prev swiper-button-prev--square zoom-cursor">
              <i className="icon-down-open"></i>
            </div>
          </div>
        </div>


        <article className="caption-single container">
          <div className="row">
            <div className="col-12 col-lg-2"><span className="num-article">03 —</span></div>
            <div className="col-12 col-lg-9">
              <h2 className="title title--h4 js-lines"  dangerouslySetInnerHTML={{__html: `${p.slider.title}`}} />
              <div className="description js-block"  dangerouslySetInnerHTML={{__html: `${p.main.description}`}} />
            </div>
          </div>
        </article>


        <figure className="image-container reveal">
          <img className="cover lazyload" src={p.summarizingImage} alt="" />
        </figure>
 

        <nav className="page-nav">
          <a className="btn-link" href="#"><i className="circle circle--left icon-left-open"></i><span>Prev project</span></a>
          <a className="btn-link" href="#"><span>Next project</span><i className="circle circle--right icon-right-open"></i></a>
        </nav>

      </section>
    </>
  )
}

export default ProjectContent;