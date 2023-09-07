/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import Box from "../component/box"
import Button from "../component/button"
import { Post, resetButton } from "../static/url"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const [data, setData] = useState({})
  const reset = useRef(null)
  const navigate = useNavigate()
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const signin = async (e) => {
    e.preventDefault()
    try {
      const res = await Post("signin", data)
      console.log(res)
      localStorage.setItem("token", res.token)
      localStorage.setItem("pr", JSON.stringify(res.body))
      resetButton(reset)

      navigate("/", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={signin}>
        <Box name="email" label="Email" type="email" onChange={handleInput} />
        <Box name="password" label="Password" type="password" onChange={handleInput} />
        <Button type="submit" name="Signin" />
        <button type="reset" ref={reset} disabled>
          reset
        </button>
      </form>
    </div>
  )
}

export default Signin
