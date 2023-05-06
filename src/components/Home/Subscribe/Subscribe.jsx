import { Button } from '../../../components/Button/Button';
import { Container } from '../../../components/Container/Container.styled';
import {
  SubscribeSection,
  SubscribeForm,
  SubscribeTitle,
  SubscribeInput,
} from './Subscribe.styled';

export const Subscribe = () => {
  return (
    <SubscribeSection>
      <Container>
        <SubscribeForm>
          <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
          <form>
            <SubscribeInput
              type="email"
              placeholder="Your Email Address"
              pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            />
            <Button text={'Subscribe'} stl="blue" type="submit" icon="no" />
          </form>
        </SubscribeForm>
      </Container>
    </SubscribeSection>
  );
};
