import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import axios from 'axios';
import { CardData } from '../../types';
import { config } from '../../config';
import ErrorPage from '../ErrorPage/ErrorPage';
import { SyncLoader } from 'react-spinners';

const WelcomePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { baseURL } = config;

  useEffect(() => {
    document.title = 'Welcome';
    const fetchDeliveryData = async () => {
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
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchDeliveryData();
    }
  }, [baseURL, navigate, userId]);

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
    <div className="px-4 py-16 w-full flex justify-center">
      <Card {...data} />
    </div>
  );
};

export default WelcomePage;
