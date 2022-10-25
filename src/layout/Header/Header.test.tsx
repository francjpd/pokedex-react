import { render, screen } from '@testing-library/react';
import Header from './Header';
jest.mock('react-router-dom')

describe('Headers Layout test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<Header />);
    })
    it('should render the Header layout correctly', () => {
        expect(component).toMatchSnapshot();

        expect(screen.getByText(/Add Pokemon/i)).toBeInTheDocument()
        expect(screen.queryByText(/List/i)).toBeNull()
    });

})
