import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest //👉🏻 prende tutti i restanti elementi dell'oggetto props
}) {
    const classes = twMerge(
        classNames(rest.className, 'flex items-center px-3 py-1.5 border ease-in duration-300 text-white', {
            'border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800': primary,
            'border-sky-500 bg-sky-500 hover:bg-sky-800 hover:border-sky-800': secondary,
            'border-green-500 bg-green-500 hover:bg-green-800 hover:border-green-800': success,
            'border-yellow-500 bg-yellow-500 hover:bg-yellow-800 hover:border-yellow-800': warning,
            'border-red-500 bg-red-500 hover:bg-red-800 hover:border-red-800': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500 hover:text-white': primary && outline,
            'text-sky-500 hover:text-white': secondary && outline,
            'text-green-500 hover:text-white': success && outline,
            'text-yellow-500 hover:text-white': warning && outline,
            'text-red-500 hover:text-white': danger && outline,
        })
    );

    return <button {...rest} className={classes}>{children}</button> //👉🏻 underlyng element (JSX under a component)
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger');
        }
    }
}

export default Button;