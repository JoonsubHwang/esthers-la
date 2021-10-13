import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import minWidth from '../modules/minWidth';

describe('Header', () => {

    test('renders Header component', () => {

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText('Esthers.LA')).toBeInTheDocument();

        expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
        
        const vw = window.innerWidth || document.documentElement.clientWidth || 0;
        if(vw >= minWidth.laptop)
            expect(screen.getAllByRole('link')).toHaveLength(3);
    });
});