import { Button } from 'components/Button/Button';
import { Title } from 'components/Home/Hero/Hero.styled';
import notFound from '../../images/404.png';
import { useNavigate } from 'react-router-dom';
import {
  NotFoundSection,
  NotFoundInfo,
  NotFoundSubtitle,
  ImageBg,
} from './NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();

  const handleComeBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <main>
      <NotFoundSection>
        <ImageBg>
          <NotFoundInfo>
            <img src={notFound} alt="not found" />
            <Title>Page not found</Title>
            <NotFoundSubtitle>
              The page you are looking for doesn't exist or has been moved
            </NotFoundSubtitle>
            <Button text={'Go to Homepage'} stl="blue" func={handleComeBack} />
          </NotFoundInfo>
        </ImageBg>
      </NotFoundSection>
    </main>
  );
};

export default NotFound;
