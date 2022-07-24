import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Top from './routes/Top';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Top />} />
  </Routes>
);

export default App;
