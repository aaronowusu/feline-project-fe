import { render, screen } from '@testing-library/react';
import Button from './Button';
import { primaryButtonClasses, secondaryButtonClasses } from './styles';

describe('Button Component', () => {
  it('renders with the correct text', () => {
    render(<Button variant="primary" text="Click Me" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the primary class correctly', () => {
    render(<Button variant="primary" text="Primary" />);
    const buttonElement = screen.getByRole('button', { name: /Primary/i });
    expect(buttonElement).toHaveClass(primaryButtonClasses);
  });

  it('applies the secondary class correctly', () => {
    render(<Button variant="secondary" text="Secondary" />);
    const buttonElement = screen.getByRole('button', { name: /Secondary/i });
    expect(buttonElement).toHaveClass(secondaryButtonClasses);
  });
});
