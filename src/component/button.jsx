/* eslint-disable react/prop-types */
const Button = ({ name }) => <button>{name || "hello"}</button>

export default Button

export const ResetButton = ({ reference }) => (
  <button type="reset" ref={reference} disabled>
    reset
  </button>
)
