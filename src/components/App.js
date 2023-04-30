import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import AnswerSheet from './AnswerSheet';
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
  {
    path : '/AnswerSheet',
    element : <CheckUserExist><AnswerSheet /></CheckUserExist>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
