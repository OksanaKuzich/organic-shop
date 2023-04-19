import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Preloader } from '../Preloader/Preloader';

const Layout = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default Layout;
