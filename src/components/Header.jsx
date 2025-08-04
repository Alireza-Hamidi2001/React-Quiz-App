import sprite from "../assets/SVGs/sprite.svg";

function Header() {
    return (
        <header className="app-header">
            <svg className="icon-back">
                <use xlinkHref={`${sprite}#icon-display`}></use>
            </svg>
            <h1>The React Quiz</h1>
        </header>
    );
}

export default Header;
