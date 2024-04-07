import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Roots from './componants/root/Roots';
import Home from './componants/Home/Home';
import Appliedjobs from './componants/Appliedjobs';
import Errorpage from './componants/Errorpage';
import JobDeatils from './componants/JobDeatils';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aplied',
        element: <Appliedjobs></Appliedjobs>,
        loader: ()=>fetch('../jobs.json'),

      },
      {
        path: '/job/:id',
        element: <JobDeatils></JobDeatils>,
        loader: ()=>fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);