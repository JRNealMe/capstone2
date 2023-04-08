import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Modal from "../../Components/Modal"
import Stylist1 from "../../Stylist1.jpeg"
import Stylist2 from "../../Stylist2.jpeg"
import { BookingContext } from "../../Components/Booking"

function Stylist() {
  const booking = useContext(BookingContext)
  return (
    <>
      <div className="center">
        <h1>Stylist</h1>

        <Link
          onClick={() => {
            booking.setStylist("Stacia")
          }}
          to="/Service"
          className="card"
        >
          <div className="cardImage">
            <img src={Stylist1}></img>
          </div>
          <div className="cardInfo">
            <div className="cardName">Stacia</div>
            <div className="cardDiscription">
              Stacia specializing in women's hair color, specifically color
              corrections.
            </div>
          </div>
        </Link>
        <Link
          onClick={() => {
            booking.setStylist("Brianne")
          }}
          to="/Service"
          className="card"
        >
          <div className="cardImage">
            <img src={Stylist2}></img>
          </div>
          <div className="cardInfo">
            <div className="cardName">Brianne</div>
            <div className="cardDiscription">
              Brianne specializes in Redken color and has a full clientele who
              appreciate her talents.
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Stylist
