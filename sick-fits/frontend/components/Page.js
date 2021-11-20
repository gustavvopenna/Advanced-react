import PropTypes from 'prop-types';
import Header from './Header';
import Navbar from './Navbar';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <h2>I am a page!!!!</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
