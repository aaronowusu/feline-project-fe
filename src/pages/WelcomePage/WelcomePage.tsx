import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import axios from 'axios';
import { CardData } from '../../types';

const WelcomePage = () => {
  const { userId } = useParams();
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchDeliveryData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/comms/your-next-delivery/${userId}`
        );
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message);
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
  }, [userId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div className="text-center">No data available.</div>;
  }

  return (
    <div className="px-4 py-16 w-full flex justify-center">
      <Card {...data} />
    </div>
  );
};

export default WelcomePage;
