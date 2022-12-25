import React, { ForwardedRef, forwardRef } from 'react'
import Settings from '../../../../../model/Settings'
import ShapeViewInterface from '../../../../../model/ShapeViewInterface'
import Point from '../../../../../model/common/Point'
import Dimensions from '../../../../../model/common/Dimensions'

type RectangleViewProps = {
    shape: ShapeViewInterface
    delta: Point
    dimensions: Dimensions
}

const Rectangle = forwardRef(({ shape, delta, dimensions }: RectangleViewProps, ref: ForwardedRef<SVGRectElement>) => {
    return (
        <rect
            ref={ref}
            x={shape.getFrame().leftTop.x + delta.x}
            y={shape.getFrame().leftTop.y + delta.y}
            width={dimensions.width}
            height={dimensions.height}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
})

export default Rectangle
