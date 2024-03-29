import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import PaymentFail from "../../Pages/Checkout/PaymentFail";
import SuccessPayment from "../../Pages/Checkout/SuccessPayment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-virid-three.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/payment/success",
        element: <SuccessPayment></SuccessPayment>,
      },
      {
        path: "/payment/fail",
        element: <PaymentFail></PaymentFail>,
      },
    ],
  },
]);

export default router;
