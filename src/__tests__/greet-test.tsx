
import { render, screen } from "@testing-library/react"
import Greet from "../componenets/greet/Greet"

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />); 
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument()
    })    
})

test('Greet renders with a name', () => {
    render(<Greet name="Bp" />);
    const textElement = screen.getByText('Hello Bp');
    expect(textElement).toBeInTheDocument()
})

