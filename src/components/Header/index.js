// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navigation">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />

      <p>Wave</p>
    </div>
    <ul className="navigation-list">
      <li>
        <Link className="nav-link-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
