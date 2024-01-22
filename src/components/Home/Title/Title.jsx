import React from 'react';
import { TitleStyle } from './Title.styled';

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleStyle>{text}</TitleStyle>;
};
