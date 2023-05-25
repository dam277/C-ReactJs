import { Outlet, Link, useParams } from 'react-router-dom';

function Survey() {
    // Get question number from the useParams GET
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            {/* <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet /> */}
            <h2>Question {questionNumber}</h2>

            {questionNumberInt < 10 ? (<Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>) : null}
            {questionNumberInt > 1 ? (<Link to={`/survey/${questionNumberInt - 1}`}>Precedent</Link>) : null}
            {questionNumberInt === 10 ? (<Link to="/results">Résultats</Link>) : null}
        </div>
    );
}
export default Survey;
