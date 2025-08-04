function Header() {
    return (
        <header className="header">
            <h1>The React Quiz</h1>
            <ul className="header_list">
                <li className="header_item">
                    <a
                        href="#"
                        className="header_link"
                    >
                        Product
                    </a>
                </li>
                <li className="header_item">
                    <a
                        href="#"
                        className="header_link"
                    >
                        Solution
                    </a>
                </li>
                <li className="header_item">
                    <a
                        href="#"
                        className="header_link"
                    >
                        Home
                    </a>
                </li>
                <li className="header_item">
                    <a
                        href="#"
                        className="header_link"
                    >
                        Pricing
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
