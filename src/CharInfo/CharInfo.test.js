import { render, screen } from '@testing-library/react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import CharInfo from './CharInfo';

describe('CharInfo', () => {

    test('renders CharInfo component', () => {

        const CharInfoWithRouter = withRouter(CharInfo);

        render(
            <BrowserRouter>
                <CharInfoWithRouter />
            </BrowserRouter>
        );

        expect(screen.getByRole('heading')).toBeInTheDocument();

        expect(screen.getAllByRole('list')).toHaveLength(2);

    });
});