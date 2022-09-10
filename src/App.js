import './css/soal.css'
import Header from './Header';
import React from 'react';
import Main from './Main';
import MainSoal from './MainSoal';

import {BrowserRouter,Route,link} from 'react-router-dom'
function App() {

 
    


  return (
      <div>
       <Header />
        <Main/>
        {/* <Route path='soal' exact component={ MainSoal}/> */}
          
      </div>
  );
}

export default App;
