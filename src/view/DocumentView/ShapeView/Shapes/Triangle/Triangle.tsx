import React, { ForwardedRef, forwardRef } from 'react'
import Point from '../../../../../model/common/Point'
import Settings from '../../../../../model/Settings'
import ShapeViewInterface from '../../../../../model/ShapeViewInterface'

type TriangleViewProps = {
    shape: ShapeViewInterface
    delta: Point
}

const Triangle = forwardRef(({ shape, delta }: TriangleViewProps, ref: ForwardedRef<SVGPolygonElement>) => {
    return (
        <polygon
            ref={ref}
            points={getTrianglePointsAsPath(shape, delta)}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
})

function getTrianglePointsAsPath(triangle: ShapeViewInterface, delta: Point): string {
    const points = calculateTrianglePoints(triangle)

    return points
        .map(point => `${point.x + delta.x},${point.y + delta.y}`)
        .join(' ')
}

export function calculateTrianglePoints(triangle: ShapeViewInterface): [Point, Point, Point] {
    const leftTop = triangle.getFrame().leftTop

    const firstPoint = {
        x: leftTop.x,
        y: leftTop.y + triangle.getFrame().height,
    }
    const secondPoint = {
        x: leftTop.x + triangle.getFrame().width / 2,
        y: leftTop.y,
    }
    const thirdPoint = {
        x: leftTop.x + triangle.getFrame().width,
        y: leftTop.y + triangle.getFrame().height,
    }

    return [firstPoint, secondPoint, thirdPoint]
}

export default Triangle
