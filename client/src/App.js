import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");

    useEffect(() => {
        fetch('api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])

    useEffect(() => {
      fetch('api/hai')
          .then(response => response.text())
          .then(message => {
              setMessage2(message);
          });
  },[])

    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{message}</h1>
            <h1 className="App-title">{message2}</h1>
            </header>

        </div>
    )
}

export default App;
