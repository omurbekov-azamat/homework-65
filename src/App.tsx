import React from 'react';
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import MainContainer from "./containers/MainContainer/MainContainer";
import EditForm from "./components/EditForm/EditForm";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/:id' element={<MainContainer/>}/>
          <Route path='/admin' element={<EditForm/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
