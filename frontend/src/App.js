
import './App.css';
import {Route, Link ,BrowserRouter, Switch} from 'react-router-dom'
import Navbar from './components/navbar/navbar.js'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Todo from './components/todos/todo';
import {Container} from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Container>
    <div className="App">

     <BrowserRouter>
     <ToastContainer/>
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
    </Container>
  );
}

export default App;
