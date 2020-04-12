function Navbar() {
    return (
        <nav className="navbar">
            <div className="mr-auto logo-container">
                <a className="logo-link" href="/">
                    <img className="logotype logotype__front" src="images/logo.svg" alt="ARTEM." />
                    <img className="logotype logotype__back" src="images/logo_white.svg" alt="ARTEM." />
                </a>
            </div>
            <div className="ml-sm-auto">
                <button className="hamburger zoom-cursor" type="button">
                    <span className="hamburger__inner"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;