import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import About from './views/About/About';
import Tech from './views/Tech/Tech';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/tech">
              <Tech />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
