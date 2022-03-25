import './Layout.css';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
