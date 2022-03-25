import './App.css';
import Layout from './views/Layout/Layout';
import About from './views/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
