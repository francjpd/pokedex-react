import { render } from '@testing-library/react';
import AddPage from './AddPage';
jest.mock('react-router-dom')

describe('AddPage view test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<AddPage />);
    })

    it('should render the AddPage layout correctly', () => {
        expect(component).toMatchSnapshot();

    });

    // it('should validate all fields', () => {
    //     // to do
    // });

})
