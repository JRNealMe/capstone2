import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.uqfjrxy.mongodb.net/?retryWrites=true&w=majority`;



const test = new Schema ({
  name: String
})

;(async () => {
  const connector = mongoose.connect(uri);
  
  let value = await connector.then(async () => {
    const dog = new test({ name: 'capstone test'});
    dog.save().then(() => console.log('bark')) 
  }) 
  return value;
})

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
