import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { axiosInterceptor } from './axsiosInterceptor';
import { NotLoggedInHeader } from './components/templates/header/notLoggedInHeader';
import { ProblemIndex } from './routes/problem/ProblemIndex';
import { ProblemShow } from './routes/problem/ProblemShow';
import { Top } from './routes/Top';

const App: FC = () => {
  axiosInterceptor();

  return (
    <>
      <NotLoggedInHeader />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/problems" element={<ProblemIndex />} />
        <Route path="/problems/:id" element={<ProblemShow />} />
      </Routes>
    </>
  );
};

export default App;
