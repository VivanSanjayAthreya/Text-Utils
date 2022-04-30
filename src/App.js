import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import DisplayMessage from './components/Display-Message';
import React,{ useState } from 'react';

function App() {
  const [alert,setAlert] = useState(null);

  const showDisplayMessage = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  return (
    <>
      <Navbar title='TextUtils' />
      <DisplayMessage alert={alert} />
      <div className="container">
        <TextArea showDisplayMessage={showDisplayMessage} heading="Try TextUtils - Enter the text below" />
      </div>
    </>
  );
}

export default App;
