import React from 'react'
import useDragAndDrop from '../dragAndDrop/useDragAndDrop'
import Point from '../../model/common/Point'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeDragAndDrop<T extends SVGElement>(
    ref: React.RefObject<T> | null,
    shape: ShapeInterface,
    scaleFactor: number,
    delta: Point,
    setDelta: (delta: Point) => void,
    isSelected: boolean,
    moveElements: (delta: Point) => void,
    setCurrentElement: (shapeId: string) => void,
): void
{
    let startPos: Point

    const onStart = (event: MouseEvent) => {
        startPos = {
            x: event.pageX,
            y: event.pageY,
        }

        if (!isSelected && !event.ctrlKey)
        {
            setCurrentElement?.(shape.getId())
        }
    }

    const onMove = (event: MouseEvent) => {
        setDelta({
            x: scaleFactor * (event.pageX - startPos.x),
            y: scaleFactor * (event.pageY - startPos.y),
        })
    }

    const onFinish = () => {
        if (delta.x !== 0 && delta.y !== 0)
        {
            moveElements(delta)
        }
        setDelta({ x: 0, y: 0 })
    }

    useDragAndDrop(ref, onStart, onMove, onFinish)
}

export default useShapeDragAndDrop
