import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './Details'
import Header from './Header';
import reportWebVitals from './reportWebVitals';

// redux store

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer/rootReducer';

// routings

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoAdd from './todoApp'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/todo-app' element={<TodoAdd/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
