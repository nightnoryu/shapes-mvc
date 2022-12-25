import React from 'react'
import Menu from './Menu/Menu'
import EditorView from './EditorView/EditorView'
import ShapeViewInterface from '../model/ShapeViewInterface'
import EditorControllerInterface from '../controller/EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import Point from '../model/common/Point'
import Dimensions from '../model/common/Dimensions'

type ViewProps = {
    shapes: ShapeViewInterface[]
    controller: EditorControllerInterface
}

function View({ shapes, controller }: ViewProps): JSX.Element {
    const addRectangle = () => controller.addShape(ShapeType.RECTANGLE)
    const addTriangle = () => controller.addShape(ShapeType.TRIANGLE)
    const addEllipse = () => controller.addShape(ShapeType.ELLIPSE)

    const moveShape = (id: string, delta: Point) => controller.moveShape(id, delta.x, delta.y)
    const resizeShape = (id: string, dimensions: Dimensions) => controller.resizeShape(id, dimensions.width, dimensions.height)
    const removeShape = (id: string) => controller.removeShape(id)

    return (
        <div className="View">
            <Menu
                addRectangle={addRectangle}
                addTriangle={addTriangle}
                addEllipse={addEllipse}
            />
            <EditorView
                shapes={shapes}
                moveShape={moveShape}
                resizeShape={resizeShape}
                removeShape={removeShape}
            />
        </div>
    )
}

export default View
