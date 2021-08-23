import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import PlantCreation from './components/PlantCreation';


function App() {
  return (
    <Router>
    <div className="App">
      <div id='Header'>
        <h1>Water My Plants!</h1>
        <Link to='/login'>Log In</Link>
      </div>
      <PlantCreation/>
      {/* <Switch>
        <Route path='/login' component={}/>
        <Route path='/' component={}/>
      </Switch> */}
    </div>
    </Router>
  );
}

export default App;
