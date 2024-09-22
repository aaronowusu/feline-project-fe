import { render, screen, waitFor } from '@testing-library/react';
import WelcomePage from './WelcomePage';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockData } from '../../components/Card/Card.test';

jest.mock('axios');

jest.mock('../../hooks/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('../../config', () => ({
  config: {
    baseURL: 'http://mocked-url.com',
  },
}));
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WelcomePage', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    mockedAxios.get.mockImplementation((url: string) => {
      if (url.includes('all-user-ids')) {
        return Promise.resolve({ data: ['123', '456', '789'] });
      } else if (url.includes('your-next-delivery')) {
        return Promise.resolve({ data: mockData });
      }
      return Promise.reject({ message: 'Unknown endpoint' });
    });
  });
  it('renders the Card component with fetched data when API call is successful', async () => {
    renderWithRouter();

    await waitFor(() => {
      expect(
        screen.getByText(/Your next delivery for Fluffy/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Hey John! Your cat's next delivery is on the way./i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Total price: £69.99/i)).toBeInTheDocument();
      expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
    });
  });

  it('renders the ErrorPage component when a non 404 Error occurs', async () => {
    mockedAxios.isAxiosError.mockReturnValue(true);

    mockedAxios.get.mockRejectedValueOnce({
      isAxiosError: true,
      response: {
        status: 500,
        data: { message: 'Internal server error' },
      },
    });

    renderWithRouter();

    expect(
      await screen.findByText(/Internal server error/i)
    ).toBeInTheDocument();

    expect(
      await screen.findByAltText(/A picture of a confused cat/i)
    ).toBeInTheDocument();
  });
});

// Mocking the Router functionality and rendering the page
const renderWithRouter = (initialRoute = '/welcome/123') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="/welcome/:userId" element={<WelcomePage />} />
      </Routes>
    </MemoryRouter>
  );
};
