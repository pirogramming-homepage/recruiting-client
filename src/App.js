import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecruitForm } from './components/RecruitForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecruitForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
