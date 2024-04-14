import { BrowserRouter } from "react-router-dom"
import { AuthContextProviver } from "./context/authContext"
import Router from "./routes/router"

function App() {

  return (
      <>
      <AuthContextProviver>
        <BrowserRouter>
          <Router />        
        </BrowserRouter>
      </AuthContextProviver>
      </>
  )
}

export default App
