import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Login from './component/Login'
import Register from './component/Register'
import Profile from './component/Profile'
import UserFunctions from './src/component/UserFunctions'


class App extends Component{
  render(){
    return(
      <Router>
         <div className="App">
           <Navbar />
           <Route exact path="/" component={Landing}/>
           <div className="container">
           <Route exact path="/register" component={Register}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/profile" component={Profile}/>
           <Route exact path="/userfunctions" component={UserFunctions}/>
           </div>
         </div>
      </Router>
     
       
      
    )
  }
}

export default App;
