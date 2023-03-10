import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import MainHistory from '../Components/Main-History/Main-History/main-history';
import Footer from '../Components/Footer/footer';


test('renders "HISTORY"', () => {
    render(<MainHistory/>);
    const checkStatusText = screen.getByText(/HISTORY/i);
    expect(checkStatusText).toBeInTheDocument();
});

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
