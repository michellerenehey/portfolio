import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import Tech from './views/Tech/Tech';
import ProjectList from './views/ProjectList/ProjectList';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tech">
              <Tech />
            </Route>
            <Route exact path="/projects">
              <ProjectList />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
