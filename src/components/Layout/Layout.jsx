import './Layout.css';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
