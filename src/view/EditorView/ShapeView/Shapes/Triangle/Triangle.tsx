import React, { ForwardedRef, forwardRef } from 'react'
import Point from '../../../../../model/common/Point'
import Settings from '../../../../../model/Settings'
import Dimensions from '../../../../../model/common/Dimensions'
import ShapeInterface from '../../../../../model/ShapeInterface'

type TriangleViewProps = {
    shape: ShapeInterface
    delta: Point
    dimensions: Dimensions
}

const Triangle = forwardRef(({ shape, delta, dimensions }: TriangleViewProps, ref: ForwardedRef<SVGPolygonElement>) => {
    return (
        <polygon
            ref={ref}
            points={getTrianglePointsAsPath(shape, delta, dimensions)}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
})

function getTrianglePointsAsPath(triangle: ShapeInterface, delta: Point, dimensions: Dimensions): string {
    const points = calculateTrianglePoints(triangle, dimensions)

    return points
        .map(point => `${point.x + delta.x},${point.y + delta.y}`)
        .join(' ')
}

export function calculateTrianglePoints(triangle: ShapeInterface, dimensions: Dimensions): [Point, Point, Point] {
    const leftTop = triangle.getFrame().leftTop

    const firstPoint = {
        x: leftTop.x,
        y: leftTop.y + dimensions.height,
    }
    const secondPoint = {
        x: leftTop.x + dimensions.width / 2,
        y: leftTop.y,
    }
    const thirdPoint = {
        x: leftTop.x + dimensions.width,
        y: leftTop.y + dimensions.height,
    }

    return [firstPoint, secondPoint, thirdPoint]
}

export default Triangle
