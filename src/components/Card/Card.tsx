import catImage from '../../assets/catImage.jpg';
import { Button } from '../Button';
import Ribbon from '../Ribbon';

interface CardProps {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  message,
  totalPrice,
  freeGift,
}) => {
  return (
    <div className="relative p-4 md:p-0 bg-white max-h-80  max-w-3xl shadow-md rounded border border-card-border flex flex-col md:flex-row">
      {/* Ribbon Section*/}
      {freeGift && (
        <>
          <div className="hidden md:block">
            <Ribbon position="topRight" />
          </div>
          <div className="md:hidden ">
            <Ribbon position="bottomCenter" />
          </div>
        </>
      )}

      {/* Image Section */}
      <div className="relative flex justify-center md:w-1/2">
        {/* Desktop image */}
        <img
          src={catImage}
          alt="Cat"
          className="hidden md:block w-full rounded object-cover border-r border-card-imageBorder"
        />
        {/* Mobile image*/}
        <img
          src={catImage}
          alt="Cat"
          className="absolute md:hidden w-14 h-14 rounded-full object-cover object-center -top-12 border-r border-card-imageBorder"
        />
      </div>

      {/* Content Section */}
      <div className="font-inter text-center md:text-left p-4 ">
        <h2 className="text-card-button text-base font-bold tracking-tight whitespace-nowrap ">
          {title}
        </h2>
        <p className="mt-2 text-xs font-light tracking-tight text-card-text">
          {message}
        </p>
        <p className="mt-4 font-bold text-card-text text-sm">
          Total price: £{totalPrice}
        </p>

        <div className="mt-4 flex gap-x-4 justify-center md:justify-start">
          <Button variant="primary" text="See Details" />
          <Button variant="secondary" text="Edit Delivery" />
        </div>
      </div>
    </div>
  );
};

export default Card;
