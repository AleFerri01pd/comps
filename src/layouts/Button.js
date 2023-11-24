import PropTypes from 'prop-types';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return <button className=' border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800 ease-in duration-300 text-white font-bold'>{children}</button> //👉🏻 underlyng element (JSX under a component)
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger')
        }
    }
}

export default Button;