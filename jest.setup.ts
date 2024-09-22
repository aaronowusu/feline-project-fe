import '@testing-library/jest-dom';

Object.defineProperty(global, 'import.meta', {
    value: {
      env: {
        VITE_BASE_URL: 'http://mocked-url.com', 
      },
    },
  });

  jest.mock('../../assets/catImage.jpg', () => 'mocked-cat-image.jpg');
  jest.mock('../../assets/error.png', () => 'mocked-error-image.jpg');
  jest.mock('../../assets/404.png', () => 'mocked-cat-404-image.jpg');