import React from 'react'
import styles from './Menu.module.css'
import Button from './Button/Button'

function Menu(): JSX.Element
{
    return (
        <div className={styles.menu}>
            <Button label={'Rectangle'} action={() => console.log('Rectangle')} />
            <Button label={'Triangle'} action={() => console.log('Triangle')} />
            <Button label={'Ellipse'} action={() => console.log('Ellipse')} />
        </div>
    )
}

export default Menu
