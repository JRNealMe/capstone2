import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//TODO: Design the look and feel.
//TODO: Choose a background
//TODO: Choose color scheme
//TODO: Decide on how booking workflow will look and function

function Home() {
  return (
    <>
      <div className="center">
        <h1>Welcome to Sheer Studio</h1>
        <p>To book an appointment please clink the "book now" button</p>
      </div>
    </>
  )
}

export default Home
