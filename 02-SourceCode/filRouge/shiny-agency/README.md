# Chapitre
https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254735-transformez-votre-application-en-single-page-application-avec-react-router#/id/r-7254718


# Commande addons

Styled-components : npm install styled-components@6.0.0-rc.2          <br />
React-Router : npm install react-router-dom@6.11.2                    <br />
MSW (testing library to simulate api calls) : npm install msw --dev   <br />
Prop-types : npm install prop-types

# Convention de codage pour composants
## Elements :
const divHomeContent = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const imgLogo = styled.img
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

# Convention de tests
Commande pour savoir ou faire des tests : npm test -- --coverage

/**
 * Check if the function sum() returns the expected value
 */
describe/test/it("Tester la fonction sum()", () => 
{
  // Test variables
  const a = 3;
  const b = 7;

  // Expected result
  const expected = a + b;

  // Result obtained
  const result = sum(a, b);

  // Verify result
  expect(result).toBe(expected);
});

## Ecriture des tests en fonction du type
### Test unitaire
describe(".sum", () => 
{
  test("", () => 
  {

  });
});

### Test d'integration

### Test end to end
describe(".sum", () =>
{
  it("", () =>
  {

  });
});

# Lifecycle d'un composant classe
<img src="https://user.oc-static.com/upload/2021/06/10/16233135186442_p4c2-1.png" />