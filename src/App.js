import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecruitForm } from './components/recruiting/RecruitForm';
import { SuccessPage } from './components/recruiting/SuccessPage';
import { FailPage } from './components/FailPage';
import LoginPage from './components/examine/LoginPage';
import ExamineLayout from './components/examine/ExamineLayout';
import 'remixicon/fonts/remixicon.css';
import ExamineList from './components/examine/ExamineList';
import ExamineDetail from './components/examine/ExamineDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecruitForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
        <Route path={`/${process.env.REACT_APP_LOGIN_KEY}`} element={<LoginPage />} />

        <Route path="/examine" element={<ExamineLayout />}>
          <Route path="" element={<ExamineList />} />
          <Route path="read/:document_id" element={<ExamineDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
