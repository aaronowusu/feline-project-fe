import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigationButtons = (
  userId: string | undefined,
  userIds: string[]
) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Update currentIndex whenever userId or userIds changes
  useEffect(() => {
    if (userId && userIds.length > 0) {
      const index = userIds.indexOf(userId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [userId, userIds]);

  // Navigation handlers
  const handleFirst = () => {
    if (userIds.length > 0) {
      navigate(`/welcome/${userIds[0]}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex !== null && currentIndex > 0) {
      navigate(`/welcome/${userIds[currentIndex - 1]}`);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < userIds.length - 1) {
      navigate(`/welcome/${userIds[currentIndex + 1]}`);
    }
  };

  const handleLast = () => {
    if (userIds.length > 0) {
      navigate(`/welcome/${userIds[userIds.length - 1]}`);
    }
  };

  return {
    handleFirst,
    handlePrevious,
    handleNext,
    handleLast,
    currentIndex,
  };
};
