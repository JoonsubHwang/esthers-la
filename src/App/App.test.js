import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

    test('renders App componenet', () => {
        render(<App />);
    });

    test('can navigate through Navbar links', () => {

        render(<App />);

        userEvent.click(screen.getByText('Library'));

        expect(screen.getByText('NOT FOUND')).toBeInTheDocument();

    });

});