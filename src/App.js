import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import "./App.css"

import Appointment from "./pages/Appointments/Appointment"
import Confirmation from "./pages/Appointments/Confirmation"
import Service from "./pages/Appointments/Service"
import Stylist from "./pages/Appointments/Stylist"
import NoPage from "./pages/NoPage"

import React from "react"

export default function App() {
  const location = useLocation()
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade-right" timeout={300}>
        <Routes location={location}>
          <Route index element={<Home />} />

          <Route path="Appointment" element={<Appointment />} />
          <Route path="Confirmation" element={<Confirmation />} />
          <Route path="Service" element={<Service />} />
          <Route path="Stylist" element={<Stylist />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
)
