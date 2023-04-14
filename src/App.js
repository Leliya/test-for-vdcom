import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Account } from './pages/Account/Account';
import { Contacts } from './components/Content/Contacts/Contacts';
import { Calendar } from './components/Content/Calendar/Calendar';
import { Report } from './components/Content/Report/Report';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lk" element={<Account />}>
          <Route path='contacts' element={<Contacts />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='report' element={<Report />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
