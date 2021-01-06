import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App () {
    const [hello, setHello] = useState("hello");
    const [hai, setHai] = useState("hai");
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('api/hello')
            .then(res => {
                setHello(res.data)
            });
    },[])

    useEffect(() => {
        axios.get('api/hai')
          .then(res => {
            setHai(res.data)
          });
  },[])

  useEffect(() => {
    axios.get('api/user')
        .then(res => {
            setUser(res.data.user)
        });
},[])

    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{hello}</h1>
            <h1 className="App-title">{hai}</h1>
            <div style={{display:'flex', flexDirection:'row'}}>
            {user.map((res,idx) =>{
                return(
                    <h1 style={{margin:'10px'}}>{res}</h1>
                )
            } )}
            </div>
            </header>
        </div>
    )
}

export default App;
