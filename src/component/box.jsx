/* eslint-disable react/prop-types */
const Box = ({ label, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}> {label} </label>
      <input name={name} id={name} {...props} className="bg-gray-100 p-2 rounded-[8px] outline-none" />
    </div>
  )
}

export default Box
