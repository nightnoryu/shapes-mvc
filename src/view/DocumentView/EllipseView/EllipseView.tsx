import React, { useRef, useState } from 'react'
import Settings from '../../../model/Settings'
import ShapeViewInterface from '../../../model/ShapeViewInterface'
import useShapeDragAndDrop from '../../../hooks/shapes/useShapeDragAndDrop'
import Point from '../../../model/common/Point'
import SelectedOverlay from '../SelectedOverlay/SelectedOverlay'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'

type EllipseViewProps = {
    shape: ShapeViewInterface
    scaleFactor: number
    moveShape: (id: string, delta: Point) => void
}

function EllipseView({ shape, scaleFactor, moveShape }: EllipseViewProps): JSX.Element {
    const leftTop = shape.getFrame().leftTop
    const width = shape.getFrame().width
    const height = shape.getFrame().height

    const rx = width / 2
    const ry = height / 2
    const cx = leftTop.x + rx
    const cy = leftTop.y + ry

    const ref = useRef(null)

    const [isSelected, setIsSelected] = useState(false)

    const delta = useShapeDragAndDrop(
        ref,
        shape,
        scaleFactor,
        false,
        setIsSelected,
        delta => moveShape(shape.getId(), delta),
    )

    useOnClickOutside(
        () => setIsSelected(false),
        ref,
    )

    return (
        <>
            <ellipse
                ref={ref}
                cx={cx + delta.x}
                cy={cy + delta.y}
                rx={rx}
                ry={ry}
                fill={Settings.SHAPE_FILL_COLOR}
                stroke={Settings.SHAPE_STROKE_COLOR}
            />
            {
                isSelected &&
                <SelectedOverlay frame={shape.getFrame()} delta={delta} />
            }
        </>
    )
}

export default EllipseView
