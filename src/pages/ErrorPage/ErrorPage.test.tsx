import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('renders the error message and image', () => {
    const errorMessage = 'Something went wrong!';

    render(<ErrorPage erroMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    const catImage = screen.getByAltText(/A picture of a confused cat/i);
    expect(catImage).toBeInTheDocument();
  });

  it('sets the document title to "Error"', () => {
    render(<ErrorPage erroMessage="Error occurred" />);

    expect(document.title).toBe('Error');
  });
});
