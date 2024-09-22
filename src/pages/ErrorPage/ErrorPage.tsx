import catErrorImage from '../../assets/error.png';
import { useEffect } from 'react';

type ErrorPageProps = {
  erroMessage: string;
};
const ErrorPage = ({ erroMessage }: ErrorPageProps) => {
  useEffect(() => {
    document.title = 'Error ';
  }, []);

  return (
    <div className="flex flex-col items-center h-full bg-white justify-center p-4 text-center rounded">
      <img
        src={catErrorImage}
        alt="A picture of a confused cat"
        className="mb-8 max-w-80 xl:max-w-96 rounded-lg "
      />
      <h1 className="text-lg xl:text-2xl font-bold text-card-text mb-4 ">
        {erroMessage}
      </h1>
    </div>
  );
};

export default ErrorPage;
