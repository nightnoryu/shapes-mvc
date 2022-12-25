import React, { ForwardedRef, forwardRef } from 'react'
import Settings from '../../../../../model/Settings'
import Point from '../../../../../model/common/Point'
import Frame from '../../../../../model/common/Frame'
import Dimensions from '../../../../../model/common/Dimensions'

type EllipseViewProps = {
    frame: Frame
    delta: Point
    dimensions: Dimensions
}

const Ellipse = forwardRef(({ frame, delta, dimensions }: EllipseViewProps, ref: ForwardedRef<SVGEllipseElement>) => {
    return (
        <ellipse
            ref={ref}
            {...getEllipseProperties(frame, delta, dimensions)}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
})

function getEllipseProperties(frame: Frame, delta: Point, dimensions: Dimensions) {
    return {
        rx: dimensions.width / 2,
        ry: dimensions.height / 2,
        cx: frame.leftTop.x + dimensions.width / 2 + delta.x,
        cy: frame.leftTop.y + dimensions.height / 2 + delta.y,
    }
}

export default Ellipse
