import './App.css';
import Layout from './views/Layout/Layout';
import About from './views/About/About';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <About />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
