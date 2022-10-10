import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import SingleQuiz from './components/SingleQuiz/SingleQuiz';
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
        loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />
      },
      {
        path: "/home",
        loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />
      },
      {
        path: "/quizes",
        loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
        path: "/quizes/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <SingleQuiz />
      }
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
