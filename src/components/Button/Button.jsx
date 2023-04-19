import { ReactComponent as IconArrow } from '../../images/icon/btn-arrow.svg';
import { ButtomComp, IconArrowWrapper, Wrapper } from './Button.styled';

export const Button = ({ text, stl, func, type = 'button', icon = 'yes' }) => {
  return (
    <ButtomComp stl={stl} type={type} onClick={func}>
      <Wrapper>
        {text}
        {icon === 'yes' ? (
          <IconArrowWrapper>
            <IconArrow />
          </IconArrowWrapper>
        ) : null}
      </Wrapper>
    </ButtomComp>
  );
};
