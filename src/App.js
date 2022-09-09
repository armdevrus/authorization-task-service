import { Route, Routes } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import Posts from './pages/Posts/Posts';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
