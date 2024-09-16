import PropTypes from 'prop-types'


function Button({ className, children,...props}) {
  return (
    <button className={`w-fit inline-flex justify-center whitespace-nowrap rounded  p-2 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 focus:outline-none 
    focus:ring focus-visible:ring focus-visible:outline-none transition-colors duration-150
    ${className}
    `}
    {...props}
    >
            {children}
            </button>
  )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Button
