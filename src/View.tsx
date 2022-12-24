import React from 'react'
import Menu from './view/Menu/Menu'
import DocumentView from './view/DocumentView/DocumentView'
import ShapeViewInterface from './model/ShapeViewInterface'
import EditorControllerInterface from './controller/EditorControllerInterface'
import ShapeType from './model/ShapeType'

type ViewProps = {
    shapes: ShapeViewInterface[]
    controller: EditorControllerInterface
}

function View({ shapes, controller }: ViewProps): JSX.Element {
    const addRectangle = () => {
        controller.addShape(ShapeType.RECTANGLE)
    }
    const addTriangle = () => {
        controller.addShape(ShapeType.TRIANGLE)
    }
    const addEllipse = () => {
        controller.addShape(ShapeType.ELLIPSE)
    }

    return (
        <div className="View">
            <Menu
                addRectangle={addRectangle}
                addTriangle={addTriangle}
                addEllipse={addEllipse}
            />
            <DocumentView shapes={shapes} />
        </div>
    )
}

export default View
