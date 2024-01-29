import styled from 'styled-components';

export const ProductCard = styled.li`
  box-sizing: border-box;
  width: 335px;
  background: ${props => props.theme.colors.backgroundLigth};
  border-radius: 30px;
  padding: 29px 26px 17px 30px;
  cursor: pointer;
`;

export const ProductCategory = styled.p`
  margin-bottom: 13px;
  width: 96px;
  height: 31px;
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs15};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 324px;
  border-radius: 30px;
`;

export const Image = styled.img`
  width: 297px;
  height: 330px;
  object-fit: cover;
  border-radius: 30px;
`;

export const ProductName = styled.p`
  text-align: left;
  margin-top: 25px;
  margin-bottom: 13px;
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs20};
  line-height: 1.15;
`;

export const DecoreEl = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.decore};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: ${props => props.theme.fonts.secondary};
`;

export const Price = styled.div`
  text-decoration: line-through;
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs15};
  color: ${props => props.theme.colors.oldPrice};
  margin-right: 10px;
`;

export const PricePromo = styled.div`
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs18};
`;

export const Info = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
