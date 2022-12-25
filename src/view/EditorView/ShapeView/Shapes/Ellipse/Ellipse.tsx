import React, { ForwardedRef, forwardRef } from 'react'
import Settings from '../../../../../model/Settings'
import Point from '../../../../../model/common/Point'
import Frame from '../../../../../model/common/Frame'

type EllipseViewProps = {
    frame: Frame
    delta: Point
}

const Ellipse = forwardRef(({ frame, delta }: EllipseViewProps, ref: ForwardedRef<SVGEllipseElement>) => {
    return (
        <ellipse
            ref={ref}
            {...getEllipseProperties(frame, delta)}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
})

function getEllipseProperties(frame: Frame, delta: Point) {
    return {
        rx: frame.width / 2,
        ry: frame.height / 2,
        cx: frame.leftTop.x + frame.width / 2 + delta.x,
        cy: frame.leftTop.y + frame.height / 2 + delta.y,
    }
}

export default Ellipse
