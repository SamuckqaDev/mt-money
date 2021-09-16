import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';


//function inside mirageJs to create rutes of 'fake' api;
createServer({
  routes(){
    this.namespace = 'api' //get request of '/api'

    //metod for get datas;
    this.get('/transactions', ()=>{
      return[{
        id: 1, 
        title: 'System of manager company', 
        amount: 10000, 
        type:'deposit',
        category: 'Development', 
        createdAt: new Date() 
      }]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



