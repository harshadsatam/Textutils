import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import { useState } from 'react';
import Textbar from './component/Textbar';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,  
  Routes,
  Route,

} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  let showAlert = (message,type)=> {

      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        
        setAlert(null)

      },1500);

  }


  const toggleMode = ()=>{

    if (mode === "light") {

      setMode("dark");
      document.body.style.backgroundColor="#1f0346";
      showAlert("dark mode has been enabled", "success");


    } else {
      
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled", "success");

    }

  }

  return (
   <>

   <Router>
    <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>

     
    
     <Routes>
    <Route exact path='/' element={<Textbar mode={mode}></Textbar>}></Route>
    <Route exact path='/About' element={< About />}></Route>
    </Routes>

    <div className='container my-3'>

    </div>
    </Router>
   </>
  );
}

export default App;
