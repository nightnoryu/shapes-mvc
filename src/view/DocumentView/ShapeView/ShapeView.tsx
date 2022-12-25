import React, { useRef, useState } from 'react'
import ShapeViewInterface from '../../../model/ShapeViewInterface'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'
import SelectedOverlay from './SelectedOverlay/SelectedOverlay'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'
import ShapeType from '../../../model/ShapeType'
import Rectangle from './Shapes/Rectangle/Rectangle'
import Triangle from './Shapes/Triangle/Triangle'
import Ellipse from './Shapes/Ellipse/Ellipse'

type RectangleViewProps = {
    shape: ShapeViewInterface
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
}

function ShapeView({ shape, scaleFactor, moveShape }: RectangleViewProps): JSX.Element {
    const ref = useRef(null)

    const [isSelected, setIsSelected] = useState(false)

    const delta = useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        false,
        setIsSelected,
        delta => moveShape(shape.getId(), delta),
    )

    useOnClickOutside(
        () => setIsSelected(false),
        ref,
    )

    const selectShape = () => {
        switch (shape.getType()) {
            case ShapeType.RECTANGLE:
                return <Rectangle
                    key={shape.getId()}
                    shape={shape}
                    ref={ref}
                    delta={delta}
                />
            case ShapeType.TRIANGLE:
                return <Triangle
                    key={shape.getId()}
                    shape={shape}
                    ref={ref}
                    delta={delta}
                />
            case ShapeType.ELLIPSE:
                return <Ellipse
                    key={shape.getId()}
                    frame={shape.getFrame()}
                    ref={ref}
                    delta={delta}
                />
            default:
                return null
        }
    }

    return (
        <>
            {selectShape()}
            {
                isSelected &&
                <SelectedOverlay frame={shape.getFrame()} delta={delta} />
            }
        </>
    )
}

export default ShapeView
