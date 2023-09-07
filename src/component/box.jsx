/* eslint-disable react/prop-types */
const Box = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input name={name} id={name} {...props} />
    </div>
  )
}

export default Box
