import { render, screen } from '@testing-library/react';
import Ribbon from './Ribbon';
import { topRightPosition, bottomCenterPosition, colorPrimary } from './styles';

describe('Ribbon Component', () => {
  it('applies default variants for color and position', () => {
    render(<Ribbon />);
    const ribbonElement = screen.getByText(/FREE GIFT/i);
    expect(ribbonElement).toHaveClass(colorPrimary);
    expect(ribbonElement).toHaveClass(topRightPosition);
  });

  it('renders with custom text if provided', () => {
    render(<Ribbon text="SPECIAL OFFER" />);
    const ribbonElement = screen.getByText(/SPECIAL OFFER/i);
    expect(ribbonElement).toBeInTheDocument();
  });

  it('applies topRight position styles', () => {
    render(<Ribbon position="topRight" />);
    const ribbonElement = screen.getByText(/FREE GIFT/i);
    expect(ribbonElement).toHaveClass(topRightPosition);
  });

  it('applies bottomCenter position styles', () => {
    render(<Ribbon position="bottomCenter" />);
    const ribbonElement = screen.getByText(/FREE GIFT/i);
    expect(ribbonElement).toHaveClass(bottomCenterPosition);
  });
});
