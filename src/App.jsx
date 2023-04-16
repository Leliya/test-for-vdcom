//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Account } from './pages/Account/Account';
import { Contacts } from './components/Contacts/Contacts';
import { Calendar } from './components/Calendar/Calendar';
import { Report } from './components/Report/Report';
import { useState } from 'react';


function App() {
  const [searchRequest, setSearchRequest] = useState("");

  function searchByName(e) {
    const value = e.target.value;
    setTimeout(()=>setSearchRequest(value), 500) 
    //setSearchRequest(value)
    //console.log(searchRequest)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lk" element={<Account onChange={searchByName}/>}>
          <Route path='contacts' element={<Contacts searchRequest={searchRequest}/>} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='report' element={<Report />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
