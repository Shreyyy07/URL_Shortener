import {RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"
import RedirectLink from "./pages/redirect-link"
import Auth from "./pages/auth"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <LandingPage/>,
      },
      {
        path:"/dashboard",
        element: <Dashboard/>,
      },
      {
        path:"/auth",
        element: <Auth/>,
      },
      {
        path:"/link/:id",   //dynamic routhing//
        element: <Link/>,
      },
      {
        path:"/:id",               //shortened URL//
        element: <RedirectLink/>,
      },
    ]
  }
]);
function App(){
  return <RouterProvider router={router}/>
}
export default App
