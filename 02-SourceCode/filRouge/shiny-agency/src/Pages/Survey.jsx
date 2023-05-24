import { Outlet, Link, useParams } from 'react-router-dom';

function Survey() {
    // Get question number from the useParams GET
    const { questionNumber } = useParams();
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            {/* <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet /> */}
            <h2>Question {questionNumber}</h2>
        </div>
    );
}
export default Survey;
