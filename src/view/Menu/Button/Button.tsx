import React from 'react'

type ButtonProps = {
    label: string
    action: () => void
}

function Button({ label, action }: ButtonProps): JSX.Element
{
    return (
        <button
            onClick={event => {
                event.preventDefault()
                action()
            }}
        >
            {label}
        </button>
    )
}

export default Button
