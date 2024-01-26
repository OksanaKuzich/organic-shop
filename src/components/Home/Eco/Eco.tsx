import React from 'react';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ecoArr, EcoData } from './data'; // Assuming there is a type for the data, replace 'EcoData' with the actual type
import { Container } from '../../Container/Container.styled';
import {
  EcoSection,
  Image,
  EcoInfo,
  EcoList,
  EcoItemTitle,
  EcoItemSubtitle,
} from './Eco.styled';

export const Eco: React.FC = () => {
  return (
    <EcoSection>
      <Container>
        <Image />
        <EcoInfo>
          <Subtitle text={'Eco Friendly'} />
          <Title text={'Econis is a Friendly Organic Store'} />
          <EcoList>
            {ecoArr.map(({ title, subtitle }: EcoData) => (
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
