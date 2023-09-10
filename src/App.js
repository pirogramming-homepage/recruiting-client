import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecruitForm } from './components/RecruitForm';
import { SuccessPage } from './components/SuccessPage';
import { FailPage } from './components/FailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecruitForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
