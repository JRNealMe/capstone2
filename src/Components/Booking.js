import React, { createContext, useState } from "react"
import moment from "moment"

export const BookingContext = createContext({
  appointment: moment().toISOString({ keepOffset: true }),
  stylist: "",
  service: "",
})

const BookingProvider = ({ children }) => {
  const [stylist, setStylist] = useState("")
  const [service, setService] = useState("")
  const [appointment, setAppointment] = useState(
    moment().toISOString({ keepOffset: true })
  )
  const value = {
    appointment,
    service,
    stylist,
    setAppointment,
    setService,
    setStylist,
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export default BookingProvider
