import React, { useRef } from 'react'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'
import SelectedOverlay from './SelectedOverlay/SelectedOverlay'
import ResizeAnchor from './ResizeAnchor/ResizeAnchor'
import useShapeResize from '../../../hooks/shapes/useShapeResize'
import Frame from '../../../model/common/Frame'
import Dimensions from '../../../model/common/Dimensions'
import useHotkey from '../../../hooks/common/useHotkey'
import ShapeViewFactory from './ShapeViewFactory'
import ShapeInterface from '../../../model/ShapeInterface'

type RectangleViewProps = {
    shape: ShapeInterface
    isSelected: boolean
    setSelectedId: (id: string) => void
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, dimensions: Dimensions) => void
    removeShape: (id: string) => void
}

function ShapeView(
    {
        shape,
        isSelected,
        setSelectedId,
        scaleFactor,
        moveShape,
        resizeShape,
        removeShape,
    }: RectangleViewProps) {
    const ref = useRef(null)
    const resizeAnchorRef = useRef(null)

    // TODO
    // 1. selection z-index
    // maybe just move SelectedOverlay as last element in EditorView and store selected shape ID in there as well
    const delta = useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        isSelected,
        () => setSelectedId(shape.getId()),
        delta => moveShape(shape.getId(), delta),
    )
    const dimensions = useShapeResize(
        shape,
        scaleFactor,
        resizeShape,
        resizeAnchorRef,
    )

    useHotkey('Delete', () => {
        if (isSelected) {
            removeShape(shape.getId())
        }
    })

    const resizeAnchorDelta = getResizeAnchorTranslateDelta(shape.getFrame(), delta, dimensions)

    return (
        <>
            {ShapeViewFactory.create(shape, ref, delta, dimensions)}
            {
                isSelected &&
                <>
                    <SelectedOverlay frame={shape.getFrame()} delta={delta} dimensions={dimensions} />
                    <ResizeAnchor shape={shape} delta={resizeAnchorDelta} ref={resizeAnchorRef} />
                </>
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
