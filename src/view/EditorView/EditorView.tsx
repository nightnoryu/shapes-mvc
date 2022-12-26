import React, { useRef, useState } from 'react'
import Settings from '../../model/Settings'
import styles from './EditorView.module.css'
import useScaleFactorForDragAndDrop from '../../hooks/dragAndDrop/useScaleFactorForDragAndDrop'
import Point from '../../model/common/Point'
import ShapeView from './ShapeView/ShapeView'
import Dimensions from '../../model/common/Dimensions'
import ShapeInterface from '../../model/ShapeInterface'
import useEventListener from '../../hooks/common/useEventListener'

type EditorViewProps = {
    shapes: ShapeInterface[]
    moveShape: (id: string, delta: Point) => void
    resizeShape: (id: string, dimensions: Dimensions) => void
    removeShape: (id: string) => void
}

function EditorView({ shapes, moveShape, resizeShape, removeShape }: EditorViewProps): JSX.Element {
    const ref = useRef(null)
    const [selectedId, setSelectedId] = useState('')
    const scaleFactor = useScaleFactorForDragAndDrop(ref, Settings.DOCUMENT_WIDTH)

    useEventListener('mousedown', event => {
        if (event.target === ref.current) {
            setSelectedId('')
        }
    })

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
                    isSelected={shape.getId() === selectedId}
                    setSelectedId={setSelectedId}
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
