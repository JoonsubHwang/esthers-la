import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

    test('renders App componenet', () => {
        render(<App />);
        expect(screen.getAllByRole('link')).toHaveLength(1 + 3 + 1 + 9);
    });

    test('navigate through Navbar links', () => {

        render(<App />);
        
        userEvent.click(screen.getByText('Library'));

        expect(screen.getByText('NOT FOUND')).toBeInTheDocument();

    });

    test('search character using searchbars', () => {

        render(<App />);
        
        // header searchbar
        userEvent.type(screen.getAllByRole('textbox')[0], 'CharacterName');
        userEvent.click(screen.getAllByRole('button')[0]);
        expect(screen.getByText('CharacterName')).toBeInTheDocument();

        userEvent.click(screen.getByText('Esthers.LA'));
        
        // homepage searchbar
        userEvent.type(screen.getAllByRole('textbox')[1], 'CharacterName');
        userEvent.click(screen.getAllByRole('button')[1]);
        expect(screen.getByText('CharacterName')).toBeInTheDocument();

    });

});