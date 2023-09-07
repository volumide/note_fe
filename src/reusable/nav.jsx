import { Link, Outlet } from "react-router-dom"

const Container = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Container
