/* eslint-disable no-unused-vars */
import { useState } from "react"
import Box from "../component/box"
import Button from "../component/button"
import { Post } from "../static/url"

const Signup = () => {
  const [data, setData] = useState({})
  const signup = async () => {
    try {
      const res = await Post("signup", data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={signup}>
        <Box name="first_name" label="First name" />
        <Box name="last_name" label="Last name" />
        <Box name="email" label="Email" type="email" />
        <Box name="phone" label="Phone" />
        <Box name="password" label="Password" type="password" />
        <Button type="submit" />
      </form>
    </div>
  )
}

export default Signup
