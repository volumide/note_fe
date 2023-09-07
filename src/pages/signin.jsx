/* eslint-disable no-unused-vars */
import { useState } from "react"
import Box from "../component/box"
import Button from "../component/button"
import { Post } from "../static/url"

const Signin = () => {
  const [data, setData] = useState({})
  const signin = async () => {
    try {
      const res = await Post("/signin", data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Box name="email" label="Email" />
      <Box name="phone" label="Phone" />
      <Button />
    </div>
  )
}

export default Signin
