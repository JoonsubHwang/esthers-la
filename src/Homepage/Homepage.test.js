import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';

describe('Homepage', () => {

    test('renders Homepage component', () => {

        render(
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );

        expect(screen.getByText('Esthers.LA')).toBeInTheDocument();

        expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
        
        expect(screen.getAllByRole('link')).toHaveLength(1 + 9);
    });
});