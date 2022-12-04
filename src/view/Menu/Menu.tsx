import React from 'react'
import styles from './Menu.module.css'
import Button from './Button/Button'

function Menu(): JSX.Element
{
    return (
        <div className={styles.menu}>
            <Button action={() => console.log('Rectangle')} />
            <Button action={() => console.log('Triangle')} />
            <Button action={() => console.log('Ellipse')} />
        </div>
    )
}

export default Menu
