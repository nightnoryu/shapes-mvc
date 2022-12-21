import React from 'react'
import useShapeDragAndDrop from './useShapeDragAndDrop'
import useShapeResize from './useShapeResize'
import useShapeSelection from './useShapeSelection'
import ShapeInterface from '../../model/ShapeInterface'
import Point from '../../model/common/Point'

type Dimensions = {
    width: number
    height: number
}

function useShapeActions<T extends SVGElement>(
    shape: ShapeInterface,
    ref: React.RefObject<T>,
    resizeAnchorRef: React.RefObject<SVGRectElement>,
    isSelected: boolean,
    scaleFactor: number,
    delta: Point,
    setDelta: (delta: Point) => void,
    selectShape: (shapeId: string) => void,
    resizeShape: (shapeId: string, width: number, height: number) => void,
    moveElements: (delta: Point) => void,
    setCurrentElement: (shapeId: string) => void,
): Dimensions
{
    useShapeSelection(
        shape.getId(),
        ref,
        isSelected,
        selectShape,
    )

    useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        delta,
        setDelta,
        isSelected,
        moveElements,
        setCurrentElement,
    )

    return useShapeResize(
        resizeAnchorRef,
        shape,
        scaleFactor,
        resizeShape,
    )
}

export default useShapeActions
