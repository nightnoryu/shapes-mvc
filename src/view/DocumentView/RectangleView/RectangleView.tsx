import React from 'react'
import Settings from '../../../model/Settings'
import ShapeViewInterface from '../../../model/ShapeViewInterface'

type RectangleViewProps = {
    shape: ShapeViewInterface
}

function RectangleView({ shape }: RectangleViewProps): JSX.Element {
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
