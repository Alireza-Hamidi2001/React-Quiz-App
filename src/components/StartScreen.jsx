import sprite from "../assets/SVGs/sprite.svg";

function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>
                <svg className="icon-lamp">
                    <use xlinkHref={`${sprite}#icon-lamp`}></use>
                </svg>
                Welcome to The React Quiz!
            </h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "start" })}
            >
                Let's Start
            </button>
        </div>
    );
}

export default StartScreen;
