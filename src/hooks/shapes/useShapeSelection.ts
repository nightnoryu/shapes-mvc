import React, { useState } from 'react'
import useEventListener from '../common/useEventListener'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeSelection(ref: React.RefObject<SVGElement>) {
    const [selectedShape, setSelectedShape] = useState<ShapeInterface | null>(null)

    useEventListener('mousedown', event => {
        if (event.target === ref.current) {
            setSelectedShape(null)
        }
    })

    return {
        selectedShape,
        setSelectedShape,
    }
}

export default useShapeSelection
