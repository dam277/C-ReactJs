import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../Utils/Styles/Atoms'
import DarkLogo from '../../Assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={DarkLogo} />
            </Link>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
        </NavContainer>
    )
}

export default Header