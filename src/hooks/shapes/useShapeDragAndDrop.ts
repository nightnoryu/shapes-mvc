import React, { useState } from 'react'
import useDragAndDrop from '../dragAndDrop/useDragAndDrop'
import Point from '../../model/common/Point'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeDragAndDrop<T extends SVGElement>(
    ref: React.RefObject<T> | null,
    shape: ShapeInterface,
    scaleFactor: number,
    isSelected: boolean,
    setIsSelected: (isSelected: boolean) => void,
    moveShape: (delta: Point) => void,
): Point {
    const [delta, setDelta] = useState({ x: 0, y: 0 })
    let startPos: Point

    const onStart = (event: MouseEvent) => {
        startPos = {
            x: event.pageX,
            y: event.pageY,
        }

        if (!isSelected) {
            setIsSelected(true)
        }
    }

    const onMove = (event: MouseEvent) => {
        setDelta({
            x: scaleFactor * (event.pageX - startPos.x),
            y: scaleFactor * (event.pageY - startPos.y),
        })
    }

    const onFinish = () => {
        if (delta.x !== 0 && delta.y !== 0) {
            moveShape(delta)
        }
        setDelta({ x: 0, y: 0 })
    }

    useDragAndDrop(ref, onStart, onMove, onFinish)
    return delta
}

export default useShapeDragAndDrop
