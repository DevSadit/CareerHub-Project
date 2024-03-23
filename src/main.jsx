import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Statistic from './components/Statistic/Statistic';
import ApliedJob from './components/ApliedJob/ApliedJob';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/stats",
        element: <Statistic></Statistic>,
      },
      {
        path: "/aplied-job",
        element: <ApliedJob></ApliedJob>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
