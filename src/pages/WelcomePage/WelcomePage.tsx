import Card from '../../components/Card';

const WelcomePage = () => {
  const data = {
    title: 'Your next delivery for Dorian and Ocie',
    message:
      "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
    totalPrice: '134.00',
    freeGift: true,
  };

  return (
    <div className="px-4 py-16 w-full flex justify-center">
      <Card {...data} />
    </div>
  );
};

export default WelcomePage;
