/* eslint-disable react/prop-types */
const Button = ({ name, cls }) => <button className={`p-3 bg-orange-300 text-white rounded-[8px] mt-2 ${cls}`}>{name || "hello"}</button>

export default Button

export const ResetButton = ({ reference }) => (
  <button type="reset" ref={reference} className="p-3 bg-orange-300 text-white hidden" disabled>
    reset
  </button>
)
