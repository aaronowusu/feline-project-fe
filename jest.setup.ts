import '@testing-library/jest-dom';

Object.defineProperty(global, 'import.meta', {
    value: {
      env: {
        VITE_BASE_URL: 'http://mocked-url.com', 
      },
    },
  });

