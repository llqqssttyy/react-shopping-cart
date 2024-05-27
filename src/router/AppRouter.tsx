import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <CartPage />,
        },
        {
          path: '/confirm',
          element: <OrderConfirmationPage />,
        },
        {
          path: '/checkout',
          element: <CheckoutPage />,
        },
      ],
    },
  ],
  {
    basename: '/react-shopping-cart/dist/',
  }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
