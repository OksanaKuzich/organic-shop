import { Hero } from '../../components/Home/Hero/Hero';
import { Naturel } from '../../components/Home/Naturel/Naturel';
import { About } from '../../components/Home/About/About';
import { Products } from '../../components/Home/Products/Products';
import { Testimonial } from '../../components/Home/Testimonial/Testimonial';
import { Offer } from '../../components/Home/Offer/Offer';
import { Eco } from '../../components/Home/Eco/Eco';
import { Gallery } from '../../components/Home/Gallery/Gallery';
import { News } from '../../components/Home/News/News';
import { Subscribe } from '../../components/Home/Subscribe/Subscribe';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Naturel />
        <About />
        <Products />
        <Testimonial />
        <Offer />
        <Eco />
        <Gallery />
        <News />
        <Subscribe />
      </main>
    </>
  );
};

export default HomePage;
