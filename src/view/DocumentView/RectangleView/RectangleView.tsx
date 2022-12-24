import React, { useRef } from 'react'
import Settings from '../../../model/Settings'
import ShapeViewInterface from '../../../model/ShapeViewInterface'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'

type RectangleViewProps = {
    shape: ShapeViewInterface
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
}

function RectangleView({ shape, scaleFactor, moveShape }: RectangleViewProps): JSX.Element {
    const ref = useRef(null)

    const delta = useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        false,
        delta => moveShape(shape.getId(), delta),
    )

    return (
        <rect
            ref={ref}
            x={shape.getFrame().leftTop.x + delta.x}
            y={shape.getFrame().leftTop.y + delta.y}
            width={shape.getFrame().width}
            height={shape.getFrame().height}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
}

export default RectangleView
