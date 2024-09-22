import { useNavigate } from 'react-router-dom';
import cat404Image from '../../assets/404.png';
import { Button } from '../../components/Button';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Not Found';
  }, []);

  return (
    <div className="flex flex-col items-center h-full bg-white justify-center p-4 text-center">
      <img
        src={cat404Image}
        alt="A picture of a lost cat"
        className="mb-8 max-w-80 xl:max-w-96 rounded-lg "
      />
      <h1 className="text-lg xl:text-2xl font-bold text-card-text mb-4 ">
        Paw-don Me! We couldn't find that page!
      </h1>

      <Button text="Go Back Home" size="lg" onClick={() => navigate('/')} />
    </div>
  );
};

export default NotFoundPage;
