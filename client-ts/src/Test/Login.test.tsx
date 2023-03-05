import { render, screen } from '@testing-library/react';
import Login from '../Pages/Login/login';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks for jwt in localStorage', () => {
  localStorage.setItem('jwt', 'user'); // กำหนดค่า token เป็น myToken ใน localStorage
  expect(localStorage.getItem('jwt')).toBe('user'); // ตรวจสอบว่ามี token ใน localStorage อยู่จริง และมีค่าเท่ากับ myToken
});

test("click to exit should navigate to the homepage", () => {
  render(<Login />);
  const linkElement = screen.getByText(/click to exit./i);
  expect(linkElement).toBeInTheDocument();
  userEvent.click(linkElement);
  expect(window.location.pathname).toBe("/");
});
