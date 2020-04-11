import { useQuery } from '@apollo/react-hooks';
import POSTS_QUERY from '../../../queries/posts.query';

const Hero = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {JSON.stringify(error)}</p>;
	// }
	
  return (
    <header className="hero">
      <div className="slider slider-horizontal">
        <div className="slider__caption swiper-container">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="slider__item">
                <h6 className="title title--overhead"><span className="down-up"><span>Web-Site / Mobile App</span></span></h6>
                <h1 className="title title--display-1 js-text-wave">Independence</h1>
                <p className="description"><span className="down-up"><span>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.</span></span></p>
                <a className="btn-link btn-link--circle-right" href="photo_viewer.html"><span className="down-up"><span>See details<i className="circle circle--right icon-right-open"></i></span></span></a>
              </div>
            </div>



            <div className="swiper-slide">
              <div className="slider__item">
                <h6 className="title title--overhead"><span className="down-up"><span>Branding</span></span></h6>
                <h1 className="title title--display-1 js-text-wave">Majesty</h1>
                <p className="description"><span className="down-up"><span>Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel anything when they look at your pictures.</span></span></p>
                <a className="btn-link btn-link--circle-right" href="photo_viewer.html"><span className="down-up"><span>See details<i className="circle circle--right icon-right-open"></i></span></span></a>
              </div>
            </div>



            <div className="swiper-slide">
              <div className="slider__item">
                <h6 className="title title--overhead"><span className="down-up"><span>Branding / Promotion</span></span></h6>
                <h1 className="title title--display-1 js-text-wave">Preferences</h1>
                <p className="description"><span className="down-up"><span>If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s already a lot. The instrument is not the camera but the photographer.</span></span></p>
                <a className="btn-link btn-link--circle-right" href="photo_viewer.html"><span className="down-up"><span>See details<i className="circle circle--right icon-right-open"></i></span></span></a>
              </div>
            </div>

          </div>
        </div>

        <div className="slider__image swiper-container reveal">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="cover-slider lazyload overlay--45" data-bg="img/image_slider_1.jpg"><a className="swiper-slide__link" href="#"></a></div>
            </div>



            <div className="swiper-slide">
              <div className="cover-slider lazyload overlay--45" data-bg="img/image_slider_1.jpg"><a className="swiper-slide__link" href="#"></a></div>
            </div>



            <div className="swiper-slide">
              <div className="cover-slider lazyload overlay--45" data-bg="img/image_slider_1.jpg"><a className="swiper-slide__link" href="#"></a></div>
            </div>

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
          <a className="social__link" href="#">FB</a>
          <a className="social__link" href="#">TW</a>
          <a className="social__link" href="#">IG</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;