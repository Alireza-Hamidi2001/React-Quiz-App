import sprite from "../assets/SVGs/sprite.svg";

function Error() {
    return (
        <p className="error">
            <svg className="icon-warning">
                <use xlinkHref={`${sprite}#icon-warning`}></use>
            </svg>{" "}
            There was an error fecthing questions.
        </p>
    );
}

export default Error;
