import { Link, Outlet } from "react-router-dom"

const Container = () => {
  return (
    <div>
      <nav className="shadow flex justify-between p-5">
        <Link to="/">NOTEDR</Link>
        <div className="flex items-center gap-5">
          <Link to="/signin">Login</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Container
