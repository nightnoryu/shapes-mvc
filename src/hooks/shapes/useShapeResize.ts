import React, { useEffect, useState } from 'react'
import useDragAndDrop from '../dragAndDrop/useDragAndDrop'
import ShapeInterface from '../../model/ShapeInterface'
import Point from '../../model/common/Point'

type Dimensions = {
    width: number
    height: number
}

function useShapeResize(
    ref: React.RefObject<SVGRectElement>,
    shape: ShapeInterface,
    scaleFactor: number,
    resizeShape: (shapeId: string, width: number, height: number) => void,
): Dimensions
{
    const [dimensions, setDimensions] = useState({
        width: shape.getFrame().width,
        height: shape.getFrame().height,
    })
    let startPos: Point

    const onStart = (event: MouseEvent) => {
        startPos = {
            x: event.pageX,
            y: event.pageY,
        }
    }

    const onMove = (event: MouseEvent) => {
        const delta = {
            width: scaleFactor * (event.pageX - startPos.x),
            height: scaleFactor * (event.pageY - startPos.y),
        }

        const newDimensions = {
            width: dimensions.width + delta.width,
            height: dimensions.height + delta.height,
        }

        if (newDimensions.width < 0)
        {
            newDimensions.width = 0
        }
        if (newDimensions.height < 0)
        {
            newDimensions.height = 0
        }

        setDimensions(newDimensions)
    }

    const onFinish = () => {
        resizeShape(shape.getId(), dimensions.width, dimensions.height)
    }

    useDragAndDrop(ref, onStart, onMove, onFinish)

    useEffect(() => {
        setDimensions({
            width: shape.getFrame().width,
            height: shape.getFrame().height,
        })
    }, [shape])

    return dimensions
}

export default useShapeResize
