/* eslint-disable no-unused-vars */
import { useState } from "react"
import Box from "../component/box"
import Button from "../component/button"
import { Post } from "../static/url"
import { useNavigate } from "react-router-dom"

const Signup = (e) => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const signup = async (e) => {
    e.preventDefault()
    try {
      const res = await Post("signup", data)
      navigate("/signin", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={signup}>
        <Box name="first_name" label="First name" onChange={handleInput} />
        <Box name="last_name" label="Last name" onChange={handleInput} />
        <Box name="email" label="Email" type="email" onChange={handleInput} />
        <Box name="phone" label="Phone" onChange={handleInput} />
        <Box name="password" label="Password" type="password" onChange={handleInput} />
        <Button type="submit" name="Signup" />
      </form>
    </div>
  )
}

export default Signup
