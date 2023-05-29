import { sum } from "./";
import {render, screen} from "@testing-library/react";
import Home from "./";
import { ThemeProvider } from "../../Utils/Context";
import { MemoryRouter } from "react-router-dom";

/**
 * Check if the function sum() returns the expected value
 */
test("Tester la fonction sum()", () => 
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

describe('first', () => 
{ 
    it('', () => 
    {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )

        // screen.debug();
        expect(screen.getByText('Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents')).toBeTruthy();
        
        expect(screen.getByRole('heading', 
        { 
            level: 2,
            text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
        })).toBeTruthy();
    }); 
})