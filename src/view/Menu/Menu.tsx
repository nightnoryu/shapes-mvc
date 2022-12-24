import React from 'react'
import styles from './Menu.module.css'
import Button from './Button/Button'

type MenuProps = {
    addRectangle: () => void,
    addTriangle: () => void,
    addEllipse: () => void,
}

function Menu({ addRectangle, addTriangle, addEllipse }: MenuProps): JSX.Element {
    return (
        <div className={styles.menu}>
            <Button label={'Rectangle'} action={addRectangle} />
            <Button label={'Triangle'} action={addTriangle} />
            <Button label={'Ellipse'} action={addEllipse} />
        </div>
    )
}

export default Menu
