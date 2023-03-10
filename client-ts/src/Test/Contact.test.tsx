import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer/footer';
import MainContact from '../Components/Main-Contact/main-contact';

    test('renders ".DekGit"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/.DekGit/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "About" ', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/About/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Partnerships"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Partnerships/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Careers"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Careers/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Advertising"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Advertising/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Terms"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Terms/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Policy"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Policy/i);
        expect(checkStatusText).toBeInTheDocument();
    });
    
    test('renders "Pricing"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Pricing/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Contact"', () => {
        render(<Footer />);
        const checkStatusText = screen.getByText(/Contact/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Chadaporn"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Chadaporn/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Silmee Panan"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Silmee Panan/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Thanaphat Panmas"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Thanaphat Panmas/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Pakorn Yoathong"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Pakorn Yoathong/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Papanya"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Papanya/i);
        expect(checkStatusText).toBeInTheDocument();
    });

    test('renders "Ashrof Awae"', () => {
        render(<MainContact />);
        const checkStatusText = screen.getByText(/Ashrof Awae/i);
        expect(checkStatusText).toBeInTheDocument();
    });
