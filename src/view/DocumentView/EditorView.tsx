import React, { useRef } from 'react'
import Settings from '../../model/Settings'
import styles from './DocumentView.module.css'
import ShapeViewInterface from '../../model/ShapeViewInterface'
import useScaleFactorForDragAndDrop from '../../hooks/dragAndDrop/useScaleFactorForDragAndDrop'
import Point from '../../model/common/Point'
import ShapeView from './ShapeView/ShapeView'

type EditorViewProps = {
    shapes: ShapeViewInterface[]
    moveShape: (id: string, delta: Point) => void
}

function EditorView({ shapes, moveShape }: EditorViewProps): JSX.Element {
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
                <ShapeView shape={shape} scaleFactor={scaleFactor} moveShape={moveShape} />
            ))}
        </svg>
    )
}

export default EditorView
