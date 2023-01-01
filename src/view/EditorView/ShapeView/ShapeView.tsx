import React, { useRef } from 'react'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'
import useShapeResize from '../../../hooks/shapes/useShapeResize'
import Dimensions from '../../../model/common/Dimensions'
import ShapeViewFactory from './ShapeViewFactory'
import ShapeInterface from '../../../model/ShapeInterface'
import ResizeAnchor from './ResizeAnchor/ResizeAnchor'
import Frame from '../../../model/common/Frame'

type RectangleViewProps = {
    shape: ShapeInterface
    delta: Point
    setDelta: (delta: Point) => void
    isSelected: boolean
    setSelectedShape: (shape: ShapeInterface | null) => void
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, dimensions: Dimensions) => void
}

function ShapeView(
    {
        shape,
        delta,
        setDelta,
        isSelected,
        setSelectedShape,
        scaleFactor,
        moveShape,
        resizeShape,
    }: RectangleViewProps,
) {
    const ref = useRef(null)
    const resizeAnchorRef = useRef(null)

    useShapeDragAndDrop(
        ref,
        shape,
        delta,
        setDelta,
        scaleFactor,
        isSelected,
        () => setSelectedShape(shape),
        delta => moveShape(shape.getId(), delta),
    )
    const dimensions = useShapeResize(
        shape,
        scaleFactor,
        resizeShape,
        resizeAnchorRef,
    )

    const resizeAnchorDelta = getResizeAnchorTranslateDelta(shape.getFrame(), delta, dimensions)

    return (
        <>
            {ShapeViewFactory.create(shape, ref, delta, dimensions)}
            {
                isSelected &&
                <ResizeAnchor shape={shape} delta={resizeAnchorDelta} ref={resizeAnchorRef} />
            }
        </>
    )
}

function getResizeAnchorTranslateDelta(
    frame: Frame,
    delta: Point,
    dimensions: Dimensions,
): Point {
    return delta.x === 0 && delta.y === 0
        ? {
            x: dimensions.width - frame.width,
            y: dimensions.height - frame.height,
        }
        : delta
}

export default ShapeView
