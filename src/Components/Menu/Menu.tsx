function Menu() {
  return (
    <div className="menu">
      <div className="menu-inner">
        <ul className="menu-list">
          <li><a className="menu-list__item" href="projects.html"><span>projects</span></a></li>
          <li><a className="menu-list__item" href="about.html"><span>studio</span></a></li>
          <li><a className="menu-list__item" href="news.html"><span>news</span></a></li>
          <li><a className="menu-list__item" href="contacts.html"><span>contact</span></a></li>
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