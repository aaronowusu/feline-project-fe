import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
  const [match, setMatch] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    // Create a media query list for the query
    const mediaQueryList = window.matchMedia(query);

    // Create a function to handle the change event
    const handleChange = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };

    // Add the change event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Cleanup the listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return match;
}
