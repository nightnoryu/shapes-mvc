import React, { useRef } from 'react'
import Settings from '../../model/Settings'
import styles from './EditorView.module.css'
import ShapeViewInterface from '../../model/ShapeViewInterface'
import useScaleFactorForDragAndDrop from '../../hooks/dragAndDrop/useScaleFactorForDragAndDrop'
import Point from '../../model/common/Point'
import ShapeView from './ShapeView/ShapeView'
import { SetFrameCallback } from '../../model/EditorInterface'

type EditorViewProps = {
    shapes: ShapeViewInterface[]
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, callback: SetFrameCallback) => void
    removeShape: (id: string) => void
}

function EditorView({ shapes, moveShape, resizeShape, removeShape }: EditorViewProps): JSX.Element {
    const ref = useRef(null)
    const scaleFactor = useScaleFactorForDragAndDrop(ref, Settings.DOCUMENT_WIDTH)

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
                    shape={shape}
                    scaleFactor={scaleFactor}
                    moveShape={moveShape}
                    resizeShape={resizeShape}
                    removeShape={removeShape}
                />
            ))}
        </svg>
    )
}

export default EditorView
