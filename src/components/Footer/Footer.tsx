import { contacts, messengers, pages } from './data';
import { ReactComponent as Logo } from '../../images/icon/logo.svg';
import { Container } from '../Container/Container.styled';
import {
  FooterWrapper,
  FooterTitle,
  ContactsGroup,
  ContactsList,
  ContactsItem,
  ContactsName,
  PagesGroup,
  PagesList,
  MessengersGroup,
  MessengersInfo,
  MessengersList,
  MessengerItem,
  FooterCopyright,
  CopyrightAccent,
} from './Footer.styles';

export const Footer: React.FC<IProps> = () => {
  return (
    <footer>
      <Container>
        <FooterWrapper>
          <ContactsGroup>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactsList>
              {contacts.map(({ name, contact }) => {
                return (
                  <ContactsItem key={name}>
                    <ContactsName>{name}</ContactsName>
                    <p>{contact}</p>
                  </ContactsItem>
                );
              })}
            </ContactsList>
          </ContactsGroup>
          <MessengersGroup>
            <Logo />
            <MessengersInfo>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{' '}
            </MessengersInfo>
            <MessengersList>
              {messengers.map(({ name, icon, href }) => {
                return (
                  <MessengerItem key={name}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <img src={icon} alt={name} />
                    </a>
                  </MessengerItem>
                );
              })}
            </MessengersList>
          </MessengersGroup>
          <PagesGroup>
            <FooterTitle>Utility Pages</FooterTitle>
            <PagesList>
              {pages.map(({ name }) => {
                return (
                  <li key={name}>
                    <p>{name}</p>
                  </li>
                );
              })}
            </PagesList>
          </PagesGroup>
        </FooterWrapper>
      </Container>
      <FooterCopyright>
        <p>
          Copyright &copy; <CopyrightAccent>Organick</CopyrightAccent> |
          Designed by
          <CopyrightAccent> VictorFlow </CopyrightAccent>
          Templates - Powered by <CopyrightAccent> Webflow</CopyrightAccent>
        </p>
      </FooterCopyright>
    </footer>
  );
};
