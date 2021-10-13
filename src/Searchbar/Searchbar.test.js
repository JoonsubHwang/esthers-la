import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './Searchbar';

describe('Searchbar', () => {

    test('renders Searchbar component', () => {

        render(
            <Searchbar />
        );

        expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();

    });
});