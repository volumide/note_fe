import Box from "../component/box"
import Button from "../component/button"

const Signup = () => {
  return (
    <div>
      <Box name="first_name" label="First name" />
      <Box name="last_name" label="Last name" />
      <Box name="email" label="Email" type="email" />
      <Box name="phone" label="Phone" />
      <Box name="password" label="Password" type="password" />
      <Button />
    </div>
  )
}

export default Signup
