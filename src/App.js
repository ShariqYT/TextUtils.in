import Navbar from './components/Navbar';
// import About from './components/About';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/textForm';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const changegreen = () => {
    document.body.style.backgroundColor = '#183D3D'
  }
  const changeblue = () => {
    document.body.style.backgroundColor = '#19376D'
  }
  const changegray = () => {
    document.body.style.backgroundColor = '#1B2430'
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#000d20";
      showAlert("Enabled Dark Mode", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="BonX" mode={mode} toggleMode={toggleMode} changegreen={changegreen} changeblue={changeblue} changegray={changegray} />
        <Alert alert={alert} />
        <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />
          {/* <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />}></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
