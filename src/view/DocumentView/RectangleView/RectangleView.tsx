import React from 'react'
import ShapeInterface from '../../../model/ShapeInterface'
import Settings from '../../../model/Settings'

type RectangleViewProps = {
    shape: ShapeInterface
}

function RectangleView({ shape }: RectangleViewProps): JSX.Element
{
    return (
        <rect
            x={shape.getFrame().leftTop.x}
            y={shape.getFrame().leftTop.y}
            width={shape.getFrame().width}
            height={shape.getFrame().height}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
}

export default RectangleView
