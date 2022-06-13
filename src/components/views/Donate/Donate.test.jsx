import Donate from './Donate';
import { render, screen } from '@testing-library/react';

it("renders a heading", () => {
    render(<Donate />)

    expect(screen.getByRole("heading")).toBeInTheDocument()
})

it("render a button", () => {
    render(<Donate />)

    expect(screen.getByRole("button")).toBeInTheDocument()
})

it("the button should have 'donar' as innerText", () => {
    render(<Donate />)

    expect(screen.getByRole("button")).toHaveTextContent("donar")
})