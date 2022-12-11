import React from 'react'
import ShapeInterface from '../../../model/ShapeInterface'
import Point from '../../../model/common/Point'

type TriangleViewProps = {
    shape: ShapeInterface
}

function TriangleView({ shape }: TriangleViewProps): JSX.Element
{
    return (
        <polygon
            points={getTrianglePointsAsPath(shape)}
        />
    )
}

function getTrianglePointsAsPath(triangle: ShapeInterface): string
{
    const points = calculateTrianglePoints(triangle)

    return points
        .map(point => `${point.x},${point.y}`)
        .join(' ')
}

export function calculateTrianglePoints(triangle: ShapeInterface): [Point, Point, Point]
{
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
