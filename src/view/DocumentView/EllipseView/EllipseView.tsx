import React from 'react'
import Settings from '../../../model/Settings'
import ShapeViewInterface from '../../../model/ShapeViewInterface'

type EllipseViewProps = {
    shape: ShapeViewInterface
}

function EllipseView({ shape }: EllipseViewProps): JSX.Element {
    const leftTop = shape.getFrame().leftTop
    const width = shape.getFrame().width
    const height = shape.getFrame().height

    const rx = width / 2
    const ry = height / 2
    const cx = leftTop.x + rx
    const cy = leftTop.y + ry

    return (
        <ellipse
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
}

export default EllipseView
