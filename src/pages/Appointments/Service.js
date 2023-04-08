import { useContext } from "react"
import { Link } from "react-router-dom"
import Accordion from "../../Components/Accordion"
import { BookingContext } from "../../Components/Booking"

function Service() {
  const booking = useContext(BookingContext)

  const haircuts = (
    <>
      <Link
        to="/Appointment"
        className="card"
        onClick={() => {
          booking.setService("menshaircut")
        }}
      >
        <div className="cardDescription">Men's Hair Cut</div>
      </Link>
      <Link
        to="/Appointment"
        className="card"
        onClick={() => {
          booking.setService("womenshaircut")
        }}
      >
        <div className="cardDescription">Women's Haircut</div>
      </Link>
      <Link to="/Appointment" className="card">
        <div
          className="cardDescription"
          onClick={() => {
            booking.setService("childhaircut")
          }}
        >
          <div className="cardDescription">Child Haircut</div>
        </div>
      </Link>
      <Link
        to="/Appointment"
        className="card"
        onClick={() => {
          booking.setService("combover")
        }}
      >
        <div className="cardDescription">Combover</div>
      </Link>
    </>
  )

  const hiddenElements = [
    {
      label: "Haircuts",
      value: haircuts,
    },
    {
      label: "Color",
      value: <button />,
    },
    {
      label: "Cut & Color",
      value: <button />,
    },
    {
      label: "Other",
      value: <button />,
    },
  ]

  return (
    <>
      <div className="center">
        <h1 style={{ position: "relative", left: "0", top: "25" }}>
          {booking.stylist}
        </h1>
        <div
          style={{
            position: "relative",
            width: "95%",
            height: "75%",
            overflowY: "scroll",
          }}
        >
          <Accordion hiddenElements={hiddenElements}></Accordion>
        </div>
      </div>
    </>
  )
}

export default Service
