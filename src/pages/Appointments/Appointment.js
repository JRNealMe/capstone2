import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { BookingContext } from "../../Components/Booking"
import Datetime from "react-datetime"
import moment from "moment"

function Appointments() {
  const booking = useContext(BookingContext)
  const yesterday = moment().subtract(1, "day")
  const valid = function (current) {
    if (current.get("date") === 30) {
      return false
    }
    return current.isAfter(yesterday)
  }

  const [times, setTimes] = useState([])

  const [date, setDate] = useState("")

  const change = function (current) {
    // Pull the selected date's appointments by service type from the database
    // Calculate the available times
    // Set the available times
    setDate(
      `${current.get("month") + 1}-${current.get("date")}-${current.get("year")}`
    )
    setTimes(["10:00 AM", "11:30 AM", "12:30 PM", "5:00 PM"])
  }

  let buttonList = []

  for (let time of times) {
    buttonList.push(
      <Link
        to="/Confirmation"
        className="card"
        key={time}
        onClick={() => {
          booking.setAppointment(
            moment(`${date} ${time}`, "MM-DD-YYYY h:mm A").toISOString(true)
          )
        }}
      >
        {time}
      </Link>
    )
  }

  return (
    <>
      <div className="center">
        {/* <Link to="/Confirmation">Confirmation</Link> */}
        <Datetime
          input={false}
          dateFormat="MM-DD-YYYY"
          timeFormat={false}
          isValidDate={valid}
          onChange={change}
        />
        <div className="time-button-list">{buttonList}</div>
      </div>
    </>
  )
}

export default Appointments
