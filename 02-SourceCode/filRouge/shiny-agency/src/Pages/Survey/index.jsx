import { Outlet, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { Loader } from '../../Utils/Styles/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
    // Get question number from the useParams GET
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)

    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8000/survey`)
    //     const { surveyData } = await response.json()
    //     setSurveyData(surveyData)
    //   } catch (error) {
    // console.log('===== error =====', error)
    // setError(true)
    //   }
    // }

    useEffect(() => {
        // fetchData()
        setDataLoading(true)
        fetch(`http://localhost:8000/survey`).then((response) =>
          response.json().then(({ surveyData }) => {
            setSurveyData(surveyData)
            setDataLoading(false)
            console.log(surveyData)
          })
        )
      }, [])

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? 
            (
                <Loader />
            ) 
            : 
            (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
                {/* <Link to="client">Questionnaire Client</Link>
                <Link to="freelance">Questionnaire Freelance</Link>
                <Outlet /> */}
                <LinkWrapper>
                    {surveyData[questionNumberInt + 1] ? (<Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>) : null}
                    {surveyData[questionNumberInt - 1] ? (<Link to={`/survey/${questionNumberInt - 1}`}>Precedent</Link>) : null}
                    {!surveyData[questionNumberInt + 1] ? (<Link to="/results">Résultats</Link>) : null}
                </LinkWrapper>
        </SurveyContainer>
    );
}
export default Survey;
