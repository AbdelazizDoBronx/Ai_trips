import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import TripForm from './components/TripForm';
import { GoogleOAuthProvider } from '@react-oauth/google';
import TripView from './components/TripView';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path : "trip",
      element : <TripForm/>
    },
    {
      path : "/trip-view/:id",
      element : <TripView/>
    },
  ]);

  return (
    <GoogleOAuthProvider clientId="538540297137-k1iqp9nc990sj753vufnlddcjimcjg3o.apps.googleusercontent.com">
    <div className='max-w-[1030px] mx-auto'>
    <Header/>
    <RouterProvider router={router}/>
    </div>
    </GoogleOAuthProvider>
  )
}

export default App
