import Navigation from './Navigation.js';
import Footer from './Footer.js';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
