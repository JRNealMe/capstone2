const express = require("express")
const cors = require("cors")
const { PrismaClient } = require("@prisma/client")
const moment = require("moment")
const app = express()
app.use(cors({ origin: true }))
app.use(express.json())
const PORT = 4000

const prisma = new PrismaClient()

// Define API endpoints
app.post("/booking", async (req, res) => {
  const { stylist, service, appointment } = req.body
  let newTime = moment.utc(appointment).toISOString()
  console.log(stylist, service, appointment)
  const booking = await prisma.booking
    .create({
      data: {
        stylist: stylist,
        serviceName: service,
        appointment: newTime,
      },
    })
    .then(() => {
      console.log("success")
      res.status(200).send("success")
    })
    .catch((e) => {
      res.status(500).send(e)
      console.log(e)
    })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
