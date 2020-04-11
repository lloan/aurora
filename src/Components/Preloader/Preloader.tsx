function Preloader(): JSX.Element {
  return (
    <div className="preloader">
      <div className="preloader__wrap">
        <img className="preloader__logo" src="images/logo_white.svg" alt="lloan alas - fullstack developer" />
        <div className="preloader__progress"><span></span></div>
      </div>
    </div>
  )
}

export default Preloader;