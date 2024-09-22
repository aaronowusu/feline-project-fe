import { cleanup, render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockData } from '../../components/Card/Card.test';

jest.mock('axios');
jest.mock('../../assets/catImage.jpg', () => 'mocked-cat-image.jpg');
jest.mock('../../hooks/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../config', () => ({
  config: {
    baseURL: 'http://mocked-url.com',
  },
}));
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WelcomePage', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks(); // Ensure mocks are cleared between tests
  });
  it('renders the Card component with fetched data when API call is successful', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    renderWithRouter();

    expect(
      await screen.findByText(/Your next delivery for Fluffy/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hey John! Your cat's next delivery is on the way./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Total price: £69.99/i)).toBeInTheDocument();
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });

  it('renders "No data available" if data is null', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: null });

    renderWithRouter();

    expect(await screen.findByText(/No data available/i)).toBeInTheDocument();
  });

  it('renders error message when the API request fails', async () => {
    mockedAxios.isAxiosError.mockReturnValue(true);
    mockedAxios.get.mockRejectedValueOnce({
      response: {
        data: {
          message: 'User not found',
        },
      },
    });

    renderWithRouter();

    expect(
      await screen.findByText(/^Error: User not found$/i)
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
