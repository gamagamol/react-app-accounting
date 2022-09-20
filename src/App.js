import './css/soal.css'
// import './css/ending.css'
import Header from './Header';
import React from 'react';
import iconquiz from './Assets/icon_quiz.png'
import playblack from './Assets/play_black.png'
import MainSoal from './MainSoal';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom'
// import Ending from './Ending'
function App() {

  return (
<Router>
        
      <div>
       <Header />
        <Switch>
          <Route path='/' exact>
            <div className="container " >
              <div className="row d-flex flex-column margin-top">
                  <div className="col d-flex justify-content-center isi">
                      <img src={iconquiz} width="500px"/>
                  </div>
                  <div className="col">
                      <h1 className="text-center">Lets Start The Quiz</h1>
                  </div>
                  <div className="col text-center">
                    <Link to='/soal'>
                      <img src={playblack} width="300px"/>
                    </Link>
                  </div>
                </div>
              </div>
          </Route>

          <Route path='/soal' exact>
            <MainSoal/>
          </Route>

     <Route path='/end' exact>
            {/* <Ending/> */}
          </Route>
          

        </Switch>  
      
      </div>

</Router>
  );
}

export default App;
