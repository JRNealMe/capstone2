import { Link } from "react-router-dom"
import { useContext } from "react"
import { BookingContext } from "../../Components/Booking"
import axios from "axios"

import moment from "moment"

function Confirmation() {
  const booking = useContext(BookingContext)
  const stuff = []
  for (let entry of Object.values(booking)) {
    stuff.push(entry)
  }
  return (
    <>
      <div className="center">
        <div
          style={{ background: "white", margin: "10px", padding: "10px" }}
          id="confirmationbox"
        >
          <div>
            <b>Stylist:</b> {booking.stylist}
          </div>
          <br />
          <div>
            <b>Service:</b> {booking.service}
          </div>
          <br />
          <div>
            <b>Time:</b> {moment(booking.appointment).format("MM/DD/YYYY h:mm A")}
          </div>
          <br />
          <button
            style={{ padding: "5px" }}
            onClick={() => {
              // console.log(
              //   moment(booking.appointment, "MM-DD-YYYY HH:mm A").toISOString()
              // )

              // Need to rename Appointments collection in MongoDB to appointments (lower-case) since that's what Mongoose is expecting
              // Also need to make sure we're connecting to the right database in utils/mongo.js
              console.log(booking)
              axios
                .post("http://localhost:4000/booking", {
                  stylist: booking.stylist,
                  service: booking.service,
                  appointment: booking.appointment,
                })
                .then(function (response) {
                  console.log(response)
                })
                .catch(function (error) {
                  console.log(error)
                })

              let confirmationBox = document.getElementById("confirmationbox")
              let confirmationMessage =
                document.getElementById("confirmationmessage")
              confirmationBox.hidden = true
              confirmationMessage.hidden = false
            }}
          >
            Confirm
          </button>
        </div>
        <h1 id="confirmationmessage" hidden={true}>
          Thanks for Booking with Sheer Studio
        </h1>
      </div>
    </>
  )
}

export default Confirmation
