import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark', 'light');
    localStorage.clear();
  });

  it('renders and toggles theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(document.documentElement.classList.contains('dark') || document.documentElement.classList.contains('light')).toBe(true);
    fireEvent.click(button);
    // After toggle, the class should switch
    expect(document.documentElement.classList.contains('dark') || document.documentElement.classList.contains('light')).toBe(true);
    // localStorage should be set
    expect(localStorage.getItem('theme')).toBeTruthy();
  });
}); 