import { Button } from '../../../components/Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ReactComponent as Icon } from '../../../images/icon/person.svg';
import { newsArr } from './data';
import { Container } from '../../../components/Container/Container.styled';
import {
  NewsWrapper,
  NewsTitles,
  NewsList,
  NewsItem,
  Image,
  NewsDate,
  NewsCard,
  AuthorInfo,
  CardTitle,
  CardInfo,
} from './News.styled';

export const News = () => {
  return (
    <section>
      <Container>
        <NewsWrapper>
          <NewsTitles>
            <Subtitle text={'News'} />
            <Title
              text={'Discover weekly content about organic food, & more'}
            />
          </NewsTitles>
          <Button text={'More News'} stl="white" />
        </NewsWrapper>
        <NewsList>
          {newsArr.map(({ image, author, title, info, date }) => {
            return (
              <NewsItem key={title}>
                <Image src={image} alt={title} />
                <NewsDate>{date}</NewsDate>
                <NewsCard>
                  <AuthorInfo>
                    <Icon />
                    <p>{author}</p>
                  </AuthorInfo>
                  <CardTitle>{title}</CardTitle>
                  <CardInfo>{info}</CardInfo>
                  <Button text={'Read More'} stl="yellow" />
                </NewsCard>
              </NewsItem>
            );
          })}
        </NewsList>
      </Container>
    </section>
  );
};
