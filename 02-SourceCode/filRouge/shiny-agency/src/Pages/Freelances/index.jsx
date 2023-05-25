import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../Utils/Styles/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderContainer = styled.div
`
  display: flex;
  justify-content: center;
`

function Freelances() 
{
  const [freelanceData, setFreelanceData] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => 
  {
    async function fetchFreelances()
    {
      setDataLoading(true)
      try 
      {
        const response = await fetch(`http://localhost:8000/freelances`);
        const {freelancersList} = await response.json();
        setFreelanceData(freelancersList)
      }
      catch(error)
      {
        console.log('===== error =====', error);
        setError(true)
      }
      finally
      {
        setDataLoading(false)
      }
    }
    fetchFreelances()

    // setDataLoading(true)
    // fetch(`http://localhost:8000/freelances`).then((response) =>
    //   response.json().then(({ freelancersList }) => 
    //   {
    //     setFreelanceData(freelancersList)
    //     setDataLoading(false)
    //     console.log(freelancersList)
    //   })
    // )
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <LoaderContainer>
        {isDataLoading ? ( <Loader /> )  : null }
      </LoaderContainer>
      <CardsContainer>
        {freelanceData.map((profile, index) => (
          <Card key={`${profile.name}-${index}`} label={profile.jobTitle} title={profile.name} />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances