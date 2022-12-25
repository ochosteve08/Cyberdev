import './App.css'
import Home from './component/Home';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Navbar from './component/Navbar';

const App=()=>{


  return (
        <Router>
           <div className='App'> 
              <Navbar />
              <div className="content">

                <Switch>
                  <Route path="/" >
                    <Home/>

                  </Route>

                </Switch>


              </div>

          
           </div>
    
       </Router>

  );


}


export default App;

