import React, { useRef, useState } from 'react'
import Settings from '../../model/Settings'
import styles from './EditorView.module.css'
import useScaleFactorForDragAndDrop from '../../hooks/dragAndDrop/useScaleFactorForDragAndDrop'
import Point from '../../model/common/Point'
import ShapeView from './ShapeView/ShapeView'
import Dimensions from '../../model/common/Dimensions'
import ShapeInterface from '../../model/ShapeInterface'
import useShapeSelection from '../../hooks/shapes/useShapeSelection'
import useShapeDeletion from '../../hooks/shapes/useShapeDeletion'
import SelectedOverlay from './ShapeView/SelectedOverlay/SelectedOverlay'

type EditorViewProps = {
    shapes: ShapeInterface[]
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, dimensions: Dimensions) => void
    removeShape: (id: string) => void
}

function EditorView({ shapes, moveShape, resizeShape, removeShape }: EditorViewProps): JSX.Element {
    const [delta, setDelta] = useState({ x: 0, y: 0 })
    const ref = useRef(null)
    const { selectedShape, setSelectedShape } = useShapeSelection(ref)
    const scaleFactor = useScaleFactorForDragAndDrop(ref, Settings.DOCUMENT_WIDTH)
    useShapeDeletion(selectedShape, removeShape)

    return (
        <svg
            ref={ref}
            viewBox={`0 0 ${Settings.DOCUMENT_WIDTH} ${Settings.DOCUMENT_HEIGHT}`}
            className={styles.document}
            tabIndex={0}
            onDragOver={event => event.preventDefault()}
        >
            {shapes.map(shape => (
                <ShapeView
                    key={shape.getId()}
                    shape={shape}
                    delta={delta}
                    setDelta={setDelta}
                    isSelected={shape.getId() === selectedShape?.getId()}
                    setSelectedShape={setSelectedShape}
                    scaleFactor={scaleFactor}
                    moveShape={moveShape}
                    resizeShape={resizeShape}
                />
            ))}
            {
                selectedShape &&
                <SelectedOverlay frame={selectedShape.getFrame()} delta={delta} dimensions={{
                    width: selectedShape.getFrame().width,
                    height: selectedShape.getFrame().height,
                }} />
            }
        </svg>
    )
}

export default EditorView
