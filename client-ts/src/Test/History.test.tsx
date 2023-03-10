import '@testing-library/jest-dom/extend-expect'
import {render ,screen} from '@testing-library/react';
import MainHistory from '../Components/Main-History/Main-History/main-history';

    test('renders "HISTORY"', () => {
        render(<MainHistory/>);
        const checkStatusText = screen.getByText(/HISTORY/i);
        expect(checkStatusText).toBeInTheDocument();
    });
