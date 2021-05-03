
import './App.css';
import {Route, Link ,BrowserRouter, Switch} from 'react-router-dom'
import Navbar from './components/navbar/navbar.js'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Todo from './components/todos/todo';
function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Navbar/>
     <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Todo/>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;