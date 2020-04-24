function Menu() {
  return (
    <div className="menu">
      <div className="menu-inner">
        <ul className="menu-list">
          <li><a className="menu-list__item" href="/projects"><span>projects</span></a></li> 
          <li><a className="menu-list__item" href="/resume"><span>resume</span></a></li> 
          <li><a className="menu-list__item" href="/blog"><span>blog</span></a></li>
          <li><a className="menu-list__item" href="mailto:lloanalas@outlook.com"><span>contact</span></a></li>
        </ul>
      </div>
      <div className="social social--white">
        <a className="social__link" href="#">FB</a>
        <a className="social__link" href="#">TW</a>
        <a className="social__link" href="#">IG</a>
      </div>
    </div>
  )
}

export default Menu;