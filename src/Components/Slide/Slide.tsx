import Link from 'next/link'

function Slide(props): JSX.Element {
  const { data } = props;
  const {
    heroImage,
    shortDescription, 
    title, 
    category,
  } = data;

  return (
    <div className="swiper-slide">
      <div className="slider__item">
        <h6 className="title title--overhead"><span className="down-up"><span>{category}</span></span></h6>
        <h1 className="title title--display-1 js-text-wave">{title}</h1>
        <p className="description"><span className="down-up"><span>{shortDescription}</span></span></p>
        <Link href="photo_viewer.html">
          <a className="btn-link btn-link--circle-right">
            <span className="down-up"><span>See details<i className="circle circle--right icon-right-open"></i></span></span></a>
        </Link>
      </div>
    </div>
  )
}

export default Slide;