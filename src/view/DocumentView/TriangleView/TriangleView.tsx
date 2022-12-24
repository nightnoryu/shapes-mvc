import React from 'react'
import Point from '../../../model/common/Point'
import Settings from '../../../model/Settings'
import ShapeViewInterface from '../../../model/ShapeViewInterface'

type TriangleViewProps = {
    shape: ShapeViewInterface
}

function TriangleView({ shape }: TriangleViewProps): JSX.Element {
    return (
        <polygon
            points={getTrianglePointsAsPath(shape)}
            fill={Settings.SHAPE_FILL_COLOR}
            stroke={Settings.SHAPE_STROKE_COLOR}
        />
    )
}

function getTrianglePointsAsPath(triangle: ShapeViewInterface): string {
    const points = calculateTrianglePoints(triangle)

    return points
        .map(point => `${point.x},${point.y}`)
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

export default TriangleView
