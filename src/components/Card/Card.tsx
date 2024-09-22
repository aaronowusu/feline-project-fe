import catImage from '../../assets/catImage.jpg';
import useMediaQuery from '../../hooks/useMediaQuery';
import { CardData } from '../../types';
import { Button } from '../Button';
import Ribbon from '../Ribbon';
export const mobileImageClasses =
  'absolute w-14 h-14 rounded-full object-cover object-center -top-12 border-r border-card-imageBorder"';
export const desktopImageClasses =
  'w-full rounded object-cover border-r border-card-imageBorder';

const Card: React.FC<CardData> = ({ title, message, totalPrice, freeGift }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <article
      className="relative p-4 md:p-0 bg-white min-h-[245px] max-h-80 max-w-3xl shadow-md rounded border border-card-border flex flex-col md:flex-row "
      aria-labelledby="card-title"
    >
      {/* Ribbon Section */}
      {freeGift && (
        <>
          {!isMobile ? (
            <div>
              <Ribbon position="topRight" />
            </div>
          ) : (
            <div>
              <Ribbon position="bottomCenter" />
            </div>
          )}
        </>
      )}

      {/* Image Section */}
      <div className="relative flex justify-center md:w-1/2">
        {!isMobile ? (
          <img
            src={catImage}
            alt="A picture of a cat"
            className={desktopImageClasses}
            aria-hidden="true"
          />
        ) : (
          <img
            src={catImage}
            alt="A picture of a cat"
            className={mobileImageClasses}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="font-inter text-center md:text-left p-4 max-w-[413px]">
        <header>
          <h2
            id="card-title"
            className="text-card-button text-base font-bold tracking-tight"
          >
            {title}
          </h2>
        </header>
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
    </article>
  );
};

export default Card;
