import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import DisplayMessage from './components/Display-Message';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';


function App() {
  const [alert,setAlert] = useState(null);
  const [mode,setMode] = useState('light');

  const showDisplayMessage = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleBgMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1F2937';
      // document.body.style.color = 'white';
      showDisplayMessage('Dark mode is Enabled!','success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      // document.body.style.color = '#212529';
      showDisplayMessage('Light mode is Enabled!','success');
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' toggleBgMode={toggleBgMode} mode={mode} />
        <DisplayMessage alert={alert} />
        <div className="container">
          {/* <TextArea showDisplayMessage={showDisplayMessage} mode={mode} heading="Try TextUtils - Enter the text below" />
        <About mode={mode} />
        <Contact mode={mode} /> */}
          <Routes>
            <Route path="/" element={<TextArea showDisplayMessage={showDisplayMessage} mode={mode} heading="Try TextUtils - Enter the text below" />} />
            <Route path="text-utils/about" element={<About mode={mode} />} />
            <Route path="text-utils/contact" element={<Contact mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
