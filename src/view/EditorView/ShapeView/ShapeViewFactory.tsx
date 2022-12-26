import ShapeViewInterface from '../../../model/ShapeViewInterface'
import React from 'react'
import Dimensions from '../../../model/common/Dimensions'
import Point from '../../../model/common/Point'
import ShapeType from '../../../model/ShapeType'
import Rectangle from './Shapes/Rectangle/Rectangle'
import Triangle from './Shapes/Triangle/Triangle'
import Ellipse from './Shapes/Ellipse/Ellipse'

class ShapeViewFactory {
    static create(
        shape: ShapeViewInterface,
        ref: React.MutableRefObject<null>,
        delta: Point,
        dimensions: Dimensions,
    ) {
        switch (shape.getType()) {
            case ShapeType.RECTANGLE:
                return <Rectangle
                    shape={shape}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            case ShapeType.TRIANGLE:
                return <Triangle
                    shape={shape}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            case ShapeType.ELLIPSE:
                return <Ellipse
                    frame={shape.getFrame()}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            default:
                return null
        }
    }
}

export default ShapeViewFactory
