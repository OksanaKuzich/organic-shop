import { InputStyle, LabelStyle, ValidationMessage } from './CartForm.styled';

export const CartFormInput: React.FC<IProps> = ({
  labelName,
  name,
  placeholder,
  errors,
  touched,
}) => {
  return (
    <LabelStyle>
      {labelName}
      <InputStyle name={name} placeholder={placeholder} />
      {errors[name] && touched[name] ? (
        <ValidationMessage>{errors[name]}</ValidationMessage>
      ) : null}
    </LabelStyle>
  );
};
