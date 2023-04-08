import { Link } from "react-router-dom"

import logo from "../logo192.png"

function Layout({ children }) {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Service">About Us</Link>
          </li>
          <li>
            <Link to="/Stylist">
              <button className="booknow">Book Now</button>
            </Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
