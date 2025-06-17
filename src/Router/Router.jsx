import { createBrowserRouter } from 'react-router'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/Home'
import AuthLayout from '../layout/AuthLayout'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Bookshelf from '../pages/Bookshelf'
import Addbook from '../pages/Addbook'
import Mybooks from '../pages/Mybooks'
import Bookdetails from '../pages/Bookdetails'
import ContactUs from '../pages/ContactUs'
import PrivateProvider from '../provider/PrivateProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import UpdateBook from '../pages/UpdateBook'
import Error from '../pages/Error'
import UserDashboard from '../pages/UserDashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/bookshelf',
        loader: () => fetch(`https://book-shelf-app-server.vercel.app/books`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        element: <Bookshelf></Bookshelf>
      },
      {
        path: '/addbook',
        element: (
          <PrivateProvider>
            <Addbook></Addbook>
          </PrivateProvider>
        )
      },
      {
        path: '/mybooks',
        element: (
          <PrivateProvider>
            <Mybooks></Mybooks>
          </PrivateProvider>
        )
      },
      {
        path: '/updatebooks/:id',
        loader: ({ params }) =>
          fetch(
            `https://book-shelf-app-server.vercel.app/books/user/${params.id}`
          ),
        element: (
          <PrivateProvider>
            <UpdateBook></UpdateBook>
          </PrivateProvider>
        )
      },
      {
        path: '/profile',
        element: (
          <PrivateProvider>
            <UserDashboard></UserDashboard>
          </PrivateProvider>
        )
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/bookdetails/:id',
        loader: () => fetch(`https://book-shelf-app-server.vercel.app/books`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        element: <Bookdetails></Bookdetails>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/auth/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])
