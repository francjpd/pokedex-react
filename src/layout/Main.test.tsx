import { render, screen } from '@testing-library/react';
import Main from './Main';
jest.mock('react-router-dom')

describe('Main Layout test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<Main />);
    })
    it('should render the Main layout correctly', () => {
        expect(component).toMatchSnapshot();
    });

})
