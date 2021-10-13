import { render, screen } from '@testing-library/react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {

    test('renders NotFound component', () => {

        const NotFoundWithRouter = withRouter(NotFound);

        render(
            <BrowserRouter>
                <NotFoundWithRouter />
            </BrowserRouter>
        );

        expect(screen.getByRole('heading')).toBeInTheDocument();

        expect(screen.getByText('NOT FOUND')).toBeInTheDocument();
        
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});