import { GlobalStyle } from './utiles/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Preloader } from './components/Preloader/Preloader';

const MyCompLayout = lazy(() => import('./components/Layout/Layout'));
const MyCompHome = lazy(() => import('./pages/HomePage/HomePage'));
const MyCompCart = lazy(() => import('./pages/CartPage/CartPage'));
const MyCompNotFound = lazy(() => import('./pages/NotFound/NotFound'));
const MyCompThank = lazy(() => import('./pages/ThankPage/ThankPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<MyCompLayout />}>
            <Route index element={<MyCompHome />} />
            <Route path="cart" element={<MyCompCart />} />
            <Route path="thankyou" element={<MyCompThank />} />
            <Route path="*" element={<MyCompNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
