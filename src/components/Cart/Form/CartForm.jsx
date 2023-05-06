import { CartFormInput } from './CartFormInput';
import { useNavigate } from 'react-router-dom';
import { formData } from './data';
import { Button } from '../../../components/Button/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../../../hooks/useCart';
import { sendOrder } from '../../../service/api';
import {
  FormStyle,
  LabelStyle,
  TextareaStyle,
  ValidationMessage,
} from './CartForm.styled';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string()
    .required('Required')
    .email('Invalid email')
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Invalid email!'
    ),
  address: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  // .matches(/^[a-zA-Z0-9]+$/, 'Invalid email!'),
  phone: Yup.string()
    .required('Required')
    .matches(/^\d+$/, 'Please enter only number!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  message: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

export const CartForm = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        address: '',
        phone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        const dataSend = { owner: values, orderedProducts: cart };
        const res = await sendOrder(dataSend);
        if (res) {
          navigate('/thankyou', { replace: true });
        }
        setCart([]);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormStyle>
            {formData.map(({ labelName, name, placeholder }) => {
              return (
                <CartFormInput
                  key={name}
                  labelName={labelName}
                  name={name}
                  placeholder={placeholder}
                  errors={errors}
                  touched={touched}
                />
              );
            })}
            <LabelStyle>
              Message
              <TextareaStyle
                name="message"
                placeholder={'Some extra information'}
              />
              {errors.message && touched.message ? (
                <ValidationMessage>{errors.message}</ValidationMessage>
              ) : null}
            </LabelStyle>
          </FormStyle>
          <Button text={'Confifm'} stl="blue" type="submit" icon="no" />
        </Form>
      )}
    </Formik>
  );
};
