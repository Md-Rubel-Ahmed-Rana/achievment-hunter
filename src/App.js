import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/quizes",
        element: <Quizes />
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
