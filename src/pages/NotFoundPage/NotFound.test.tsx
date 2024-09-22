import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders the 404 message and image', () => {
    renderWithRouter();

    expect(
      screen.getByText(/Paw-don Me! We couldn't find that page!/i)
    ).toBeInTheDocument();

    const catImage = screen.getByAltText(/A picture of a lost cat/i);
    expect(catImage).toBeInTheDocument();
  });

  it('sets the document title to "Not Found"', () => {
    renderWithRouter();
    expect(document.title).toBe('Not Found');
  });

  it('renders the "Go Back Home" button', () => {
    renderWithRouter();
    const button = screen.getByRole('button', { name: /Go Back Home/i });
    expect(button).toBeInTheDocument();
  });
});

const renderWithRouter = () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
};
