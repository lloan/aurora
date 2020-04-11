function Slide():JSX.Element {
  return (
    <div className="swiper-slide">
              <div className="slider__item">
                <h6 className="title title--overhead"><span className="down-up"><span>Web-Site / Mobile App</span></span></h6>
                <h1 className="title title--display-1 js-text-wave">Independence</h1>
                <p className="description"><span className="down-up"><span>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.</span></span></p>
                <a className="btn-link btn-link--circle-right" href="photo_viewer.html"><span className="down-up"><span>See details<i className="circle circle--right icon-right-open"></i></span></span></a>
              </div>
            </div>
  )
}

export default Slide;