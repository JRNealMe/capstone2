import { Outlet, Link } from "react-router-dom"

import logo from "../logo192.png"

function Layout() {
  return (
    <div className="Layout">
      <nav>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={logo} alt="logo"></img>
        </a>
        <ul>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Service">About Us</Link>
          </li>
          <li>
            <Link to="/Stylist">Book Now</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
