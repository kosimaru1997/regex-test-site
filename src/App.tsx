import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { axiosInterceptor } from './axsiosInterceptor';
import ProblemIndex from './routes/problem/ProblemIndex';
import Top from './routes/Top';

const App: FC = () => {
  axiosInterceptor();

  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/problems" element={<ProblemIndex />} />
    </Routes>
  );
};

export default App;
