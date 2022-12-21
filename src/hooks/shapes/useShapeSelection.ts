import useEventListener from '../useEventListener'
import React from 'react'

function useShapeSelection<T extends SVGElement>(
    shapeId: string,
    ref: React.RefObject<T>,
    isSelected: boolean,
    selectShape: (shapeId: string) => void,
): void
{
    useEventListener('mousedown', () => {
        if (!isSelected)
        {
            selectShape(shapeId)
        }
    }, ref)
}

export default useShapeSelection
