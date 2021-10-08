import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import Page404 from './404';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </header>
        <Switch>
          <Route path="/" exact component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
          <Route path="*" exact component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
