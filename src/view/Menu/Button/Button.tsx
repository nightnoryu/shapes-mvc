import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    label: string
    action: () => void
}

function Button({ label, action }: ButtonProps): JSX.Element
{
    return (
        <button
            className={styles.button}
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
