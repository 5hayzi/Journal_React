import PropTypes from 'prop-types'


function Button({color, extra, children,...props}) {
  return (
    <button className={`w-fit inline-flex justify-center whitespace-nowrap rounded  p-2 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 focus:outline-none 
    bg-${color}-500
    hover:bg-${color}-600 
    focus:ring-${color}-300  
    focus-visible:ring-${color}-300 
    focus:ring focus-visible:ring focus-visible:outline-none transition-colors duration-150
    ${extra}
    `}
    {...props}
    >
            {children}
            </button>
  )
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    extra: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Button
