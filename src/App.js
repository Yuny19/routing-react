import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
