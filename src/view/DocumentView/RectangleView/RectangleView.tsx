import React from 'react'
import ShapeInterface from '../../../model/ShapeInterface'

type RectangleViewProps = {
    shape: ShapeInterface
}

function RectangleView({shape}: RectangleViewProps): JSX.Element
{
    return (
        <rect
            x={shape.getFrame().leftTop.x}
            y={shape.getFrame().leftTop.y}
            width={shape.getFrame().width}
            height={shape.getFrame().height}
            fill="#000000"
            stroke="#000000"
        />
    )
}

export default RectangleView
