import "./header.css"

const Header = () => {
    return <div className="header">
    <header id="header">
        <section className="page-names">
            <nav className="page">
                <a href="index.html">Home</a>
                </nav>
            <nav className="page">
                <a href="about.html">About Me</a>
            </nav>
            <nav className="page">
                <a href="portfolio.html">Portfolio</a>
            </nav>
        </section>
        <h1 className="my-name">Anna Mitchell</h1>
    </header>
    </div>
}

export default Header;