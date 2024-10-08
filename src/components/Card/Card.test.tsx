import { render, screen } from '@testing-library/react';
import Card, {
  CardProps,
  desktopImageClasses,
  mobileImageClasses,
} from './Card';
import useMediaQuery from '../../hooks/useMediaQuery';

export const mockData: CardProps = {
  title: 'Your next delivery for Fluffy',
  message: "Hey John! Your cat's next delivery is on the way.",
  totalPrice: '69.99',
  freeGift: true,
  handleButtonClick: jest.fn(),
};

jest.mock('../../hooks/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Card Component', () => {
  beforeEach(() => {
    (useMediaQuery as jest.Mock).mockReturnValue(false); // Default to desktop view
  });

  it('renders with correct data and desktop image', () => {
    render(<Card {...mockData} />);

    // Assert that the card renders with the correct data
    expect(
      screen.getByText(/Your next delivery for Fluffy/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hey John! Your cat's next delivery is on the way./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Total price: £69.99/i)).toBeInTheDocument();

    // Assert that the card renders with the desktop image
    const catImage = screen.getByAltText(/A picture of a cat/i);
    expect(catImage).toHaveClass(desktopImageClasses);

    //Assert that Ribbon is rendered
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });

  it('renders with correct data and mobile image when useMediaQuery is true', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    render(<Card {...mockData} />);

    // Assert that the card renders with the correct data
    expect(
      screen.getByText(/Your next delivery for Fluffy/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hey John! Your cat's next delivery is on the way./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Total price: £69.99/i)).toBeInTheDocument();

    // Assert that the card renders with the mobile image
    const catImage = screen.getByAltText(/A picture of a cat/i);
    expect(catImage).toHaveClass(mobileImageClasses);

    //Assert that Ribbon is rendered
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });

  it('renders the Ribbon when freeGift is true', () => {
    render(<Card {...mockData} />);
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });

  it('does not render Ribbon when freeGift is false', () => {
    const mockDataWithoutGift: CardProps = {
      ...mockData,
      freeGift: false,
      handleButtonClick: jest.fn(),
    };
    render(<Card {...mockDataWithoutGift} />);
    expect(screen.queryByText(/FREE GIFT/i)).not.toBeInTheDocument();
  });

  it('renders primary and secondary buttons', () => {
    render(<Card {...mockData} />);

    expect(
      screen.getByRole('button', { name: /See Details/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Edit Delivery/i })
    ).toBeInTheDocument();
  });
});
