import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="left">
      <h1 className="bigTitle"> Math Magician </h1>
    </div>
    <div className="right">
      <nav className="nav">
        <Link className="navItem" to="/"> Home </Link>
        <Link className="navItem" to="/calculator"> Calculator </Link>
        <Link className="navItem" to="/quots"> Qoute </Link>
      </nav>
    </div>
  </div>
);
export default Header;
