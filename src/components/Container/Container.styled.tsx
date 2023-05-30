import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 150px;
    max-width: 1280px;
  }
  @media screen and (min-width: 1920px) {
    padding: 0 260px;
    max-width: 1920px;
  }
`;
