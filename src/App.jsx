import './App.css';
import Layout from './views/Layout/Layout';
import About from './views/About/About';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <About />
      </Layout>
    </div>
  );
}
