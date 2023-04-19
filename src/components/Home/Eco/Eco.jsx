import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ecoArr } from './data';
import { Container } from 'components/Container/Container.styled';
import {
  EcoSection,
  Image,
  EcoInfo,
  EcoList,
  EcoItemTitle,
  EcoItemSubtitle,
} from './Eco.styled';

export const Eco = () => {
  return (
    <EcoSection>
      <Container>
        <Image />
        <EcoInfo>
          <Subtitle text={'Eco Friendly'} />
          <Title text={'Econis is a Friendly Organic Store'} />
          <EcoList>
            {ecoArr.map(({ title, subtitle }) => (
              <li key={title}>
                <EcoItemTitle>{title}</EcoItemTitle>
                <EcoItemSubtitle>{subtitle}</EcoItemSubtitle>
              </li>
            ))}
          </EcoList>
        </EcoInfo>
      </Container>
    </EcoSection>
  );
};
