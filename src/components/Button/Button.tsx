import { ReactComponent as IconArrow } from './images/icon/btn-arrow.svg';
import { ButtomComp, IconArrowWrapper, Wrapper } from './Button.styled';

interface IProps {
  text: string;
  stl: string;
  func: void;
  type: string;
  icon: string;
}

export const Button: React.FC<IProps> = ({
  text,
  stl,
  func,
  type = 'button',
  icon = 'yes',
}) => {
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
