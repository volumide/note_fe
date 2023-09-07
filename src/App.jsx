import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Container from "./reusable/nav"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Container />} path="/">
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile/:id?" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
