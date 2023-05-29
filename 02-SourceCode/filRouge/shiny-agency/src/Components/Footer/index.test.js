import Footer from ".";
import { ThemeProvider } from "../../Utils/Context";
import { render, screen, fireEvent } from '@testing-library/react'

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                 <Footer />
            </ThemeProvider>
        )

        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
        fireEvent.click(nightModeButton);
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})