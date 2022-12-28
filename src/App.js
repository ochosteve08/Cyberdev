import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' ;
import Navbar from './component/Navbar';
import Create from './component/Create';
import BLogDetails from './component/BlogDetails';
import NotFound from './component/NotFound';




const App=()=>
{


  return (  
          <Router>    
              <div className='App'> 
              <Navbar/>
              <Switch>
                <Route exact path="/" >
                   <Home />
                </Route>
                <Route path="/create" >
                   <Create/>
                </Route>
                <Route path="/blogs/:id" >
                   <BLogDetails/>
                </Route>
                <Route path="*" >
                  <NotFound/>
                </Route>
              </Switch>
               
                        
              </div>

           </Router>
       

           );

}


export default App;

