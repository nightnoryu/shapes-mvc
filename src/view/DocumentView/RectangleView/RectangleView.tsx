import React, { useRef } from 'react'
import ShapeInterface from '../../../model/ShapeInterface'
import Settings from '../../../model/Settings'
import useShapeActions from '../../../hooks/shapes/useShapeActions'
import Point from '../../../model/common/Point'

type RectangleViewProps = {
    shape: ShapeInterface
    scaleFactor: number
    delta: Point
    setDelta: (point: Point) => void
    isSelected: boolean
}

function RectangleView(
    {
        shape,
        scaleFactor,
        delta,
        setDelta,
        isSelected,
    }: RectangleViewProps,
): JSX.Element
{
    const ref = useRef(null)
    const resizeAnchorRef = useRef(null)

    const dimensions = useShapeActions(
        shape,
        ref,
        resizeAnchorRef,
        isSelected,
        scaleFactor,
        delta,
        setDelta,
        (shapeId: string) => {
        },
        (shapeId: string, width: number, height: number) => {
        },
        (delta: Point) => {
        },
        (shapeId: string) => {
        },
    )

    return (
        <rect
            ref={ref}
            x={shape.getFrame().leftTop.x}
            y={shape.getFrame().leftTop.y}
            width={dimensions.width}
            height={dimensions.height}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
}

export default RectangleView
