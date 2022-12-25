import React, { ForwardedRef, forwardRef } from 'react'
import Settings from '../../../../../model/Settings'
import ShapeViewInterface from '../../../../../model/ShapeViewInterface'
import Point from '../../../../../model/common/Point'

type RectangleViewProps = {
    shape: ShapeViewInterface
    delta: Point
}

const Rectangle = forwardRef(({ shape, delta }: RectangleViewProps, ref: ForwardedRef<SVGRectElement>) => {
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
})

export default Rectangle
