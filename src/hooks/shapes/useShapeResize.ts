import React, { useState } from 'react'
import Point from '../../model/common/Point'
import useDragAndDrop from '../dragAndDrop/useDragAndDrop'
import Dimensions from '../../model/common/Dimensions'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeResize<T extends SVGElement>(
    shape: ShapeInterface,
    scaleFactor: number,
    setShapeFrame: (shapeId: string, dimensions: Dimensions) => void,
    ref: React.RefObject<T>,
): Dimensions {
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

        if (newDimensions.width < 0) {
            newDimensions.width = 0
        }
        if (newDimensions.height < 0) {
            newDimensions.height = 0
        }

        setDimensions(newDimensions)
    }

    const onFinish = () => setShapeFrame(shape.getId(), dimensions)

    useDragAndDrop(ref, onStart, onMove, onFinish)

    return dimensions
}

export default useShapeResize
