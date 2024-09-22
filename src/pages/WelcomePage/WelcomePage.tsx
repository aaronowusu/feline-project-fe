import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import axios from 'axios';
import { CardData } from '../../types';
import { config } from '../../config';
import ErrorPage from '../ErrorPage/ErrorPage';
import { SyncLoader } from 'react-spinners';
import extractName from '../../utils/extractName';
import { useNavigationButtons } from '../../hooks/useNavigationButtons';
import { Button } from '../../components/Button';
import toast from 'react-hot-toast';

const WelcomePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userIds, setUserIds] = useState<string[]>([]);
  const { baseURL } = config;

  // Fetch all user ids
  useEffect(() => {
    const fetchAllUserIds = async () => {
      try {
        const response = await axios.get(`${baseURL}/comms/all-user-ids`);
        const ids = response.data;
        setUserIds(ids);

        // If no userId is provided, navigate to the first user ID
        if (!userId && ids.length > 0) {
          navigate(`/welcome/${ids[0]}`);
        }
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data?.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchAllUserIds();
  }, [baseURL, userId, navigate]);

  // Fetch delivery data for the current user
  useEffect(() => {
    const fetchDeliveryData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `${baseURL}/comms/your-next-delivery/${userId}`
          );
          setData(response.data);
        } catch (err) {
          if (axios.isAxiosError(err) && err.response) {
            if (err.response.status === 404) {
              navigate('/404');
            } else {
              setError(err.response.data?.message);
            }
          } else {
            setError('An unknown error occurreddd');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    if (userId) {
      fetchDeliveryData();
    }
  }, [baseURL, navigate, userId]);

  // Set the document title to include the user's name
  useEffect(() => {
    if (!loading && data) {
      const extractedName = extractName(data.message || '');
      document.title = `Welcome ${extractedName}`;
    }
  }, [data, loading]);

  // Navigation handlers
  const { handleFirst, handlePrevious, handleNext, handleLast, currentIndex } =
    useNavigationButtons(userId, userIds);

  const handleButtonClick = (buttonName: string) => {
    toast(
      `${buttonName} is still under construction! Purr-haps try again later?`,
      {
        icon: '🐱',
        className: 'flex items-center justify-center',
        duration: 2000,
      }
    );
  };

  if (error) {
    return <ErrorPage erroMessage={error} />;
  }

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SyncLoader color="#0D8112" />
      </div>
    );
  }

  return (
    <div className="px-4 py-16 w-full flex flex-col justify-center items-center">
      {/* Card Section */}
      <Card {...data} handleButtonClick={handleButtonClick} />

      {/* Buttons Section */}
      <div className="flex gap-4 mt-8">
        <Button
          variant="primary"
          text="First"
          onClick={handleFirst}
          disabled={currentIndex === 0}
        />
        <Button
          variant="primary"
          text="Prev"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        />
        <Button
          variant="primary"
          text="Next"
          onClick={handleNext}
          disabled={currentIndex === userIds.length - 1}
        />
        <Button
          variant="primary"
          text="Last"
          onClick={handleLast}
          disabled={currentIndex === userIds.length - 1}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
