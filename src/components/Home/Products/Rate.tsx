import { HiStar } from 'react-icons/hi';

export const Rate = ({ rate }) => {
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < rate) {
      stars.push(<HiStar fill="#FFA858" key={i} />);
    } else {
      stars.push(<HiStar key={i} />);
    }
  }

  return <>{stars}</>;
};
