import React, { Component } from 'react';
import AppRotes from './routes';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <ToastContainer />
        <AppRotes />
      </div>
    );
  }
}

export default App;
