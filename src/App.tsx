import { AuthContextProviver } from "./context/authContext"
import Router from "./routes/router"

function App() {

  return (
      <>
      <AuthContextProviver>
        <Router />
      </AuthContextProviver>
      </>
  )
}

export default App
