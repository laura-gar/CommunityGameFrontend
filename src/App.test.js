import { render, screen } from '@testing-library/react';
import App from './App';

test('Render login component', () => {
    render(<App />); 
    screen.getByLabelText("Title"); 
    screen.getByLabelText("Username", {selector: "input"}); 
    screen.getByLabelText("Username", {selector: "label"}); 
    screen.getByLabelText("Password", {selector: "input"}); 
    screen.getByLabelText("Password", {selector: "label"}); 
    screen.getByRole("button"); 
    screen.getByRole("link"); 
} )