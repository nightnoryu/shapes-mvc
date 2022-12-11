import React from 'react'
import styles from './Menu.module.css'
import Button from './Button/Button'
import DocumentControllerInterface from '../../controller/DocumentControllerInterface'
import ShapeType from '../../model/ShapeType'
import { connect } from '../../controller/Main'

type MenuProps = {
    addRectangle: () => void,
    addTriangle: () => void,
    addEllipse: () => void,
}


function Menu({ addRectangle, addTriangle, addEllipse }: MenuProps): JSX.Element
{
    return (
        <div className={styles.menu}>
            <Button label={'Rectangle'} action={addRectangle} />
            <Button label={'Triangle'} action={addTriangle} />
            <Button label={'Ellipse'} action={addEllipse} />
        </div>
    )
}

const mapControllerToProps = (controller: DocumentControllerInterface): MenuProps => ({
    addRectangle: () => controller.addShape(ShapeType.RECTANGLE),
    addTriangle: () => controller.addShape(ShapeType.TRIANGLE),
    addEllipse: () => controller.addShape(ShapeType.ELLIPSE),
})

export default connect(null, mapControllerToProps)(Menu)
