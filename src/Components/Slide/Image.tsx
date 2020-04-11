import Link from 'next/link'

function Image(props): JSX.Element {
  const { data } = props;
  const {
    heroImage,
  } = data;

  return (
    <div className="swiper-slide">
      <div className="cover-slider lazyload overlay--45" data-bg={heroImage}>
        <a className="swiper-slide__link" href="#"></a>
      </div>
    </div>
  )
}

export default Image;