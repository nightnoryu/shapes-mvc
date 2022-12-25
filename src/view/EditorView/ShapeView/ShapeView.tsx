import React, { useRef, useState } from 'react'
import ShapeViewInterface from '../../../model/ShapeViewInterface'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'
import SelectedOverlay from './SelectedOverlay/SelectedOverlay'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'
import ShapeType from '../../../model/ShapeType'
import Rectangle from './Shapes/Rectangle/Rectangle'
import Triangle from './Shapes/Triangle/Triangle'
import Ellipse from './Shapes/Ellipse/Ellipse'
import ResizeAnchor from './ResizeAnchor/ResizeAnchor'
import useShapeResize from '../../../hooks/shapes/useShapeResize'
import { SetFrameCallback } from '../../../model/EditorInterface'
import Frame from '../../../model/common/Frame'
import Dimensions from '../../../model/common/Dimensions'

type RectangleViewProps = {
    shape: ShapeViewInterface
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, callback: SetFrameCallback) => void
}

function ShapeView({ shape, scaleFactor, moveShape, resizeShape }: RectangleViewProps): JSX.Element {
    const ref = useRef(null)
    const resizeAnchorRef = useRef(null)
    const [isSelected, setIsSelected] = useState(false)

    useOnClickOutside(
        () => setIsSelected(false),
        ref,
        [resizeAnchorRef],
    )

    const delta = useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        false,
        setIsSelected,
        delta => moveShape(shape.getId(), delta),
    )
    const dimensions = useShapeResize(
        shape,
        scaleFactor,
        resizeShape,
        resizeAnchorRef,
    )

    const resizeAnchorDelta = getResizeAnchorTranslateDelta(shape.getFrame(), delta, dimensions)

    const getShape = () => {
        switch (shape.getType()) {
            case ShapeType.RECTANGLE:
                return <Rectangle
                    key={shape.getId()}
                    shape={shape}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            case ShapeType.TRIANGLE:
                return <Triangle
                    key={shape.getId()}
                    shape={shape}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            case ShapeType.ELLIPSE:
                return <Ellipse
                    key={shape.getId()}
                    frame={shape.getFrame()}
                    ref={ref}
                    delta={delta}
                    dimensions={dimensions}
                />
            default:
                return null
        }
    }

    return (
        <>
            {getShape()}
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

export function getResizeAnchorTranslateDelta(
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
