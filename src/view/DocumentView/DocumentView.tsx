import React, { useRef } from 'react'
import Settings from '../../model/Settings'
import styles from './DocumentView.module.css'
import ShapeType from '../../model/ShapeType'
import RectangleView from './RectangleView/RectangleView'
import TriangleView from './TriangleView/TriangleView'
import EllipseView from './EllipseView/EllipseView'
import ShapeViewInterface from '../../model/ShapeViewInterface'
import useScaleFactorForDragAndDrop from '../../hooks/dragAndDrop/useScaleFactorForDragAndDrop'
import Point from '../../model/common/Point'

type DocumentViewProps = {
    shapes: ShapeViewInterface[]
    moveShape: (id: string, delta: Point) => void
}

function DocumentView({ shapes, moveShape }: DocumentViewProps): JSX.Element {
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
            {shapes.map(shape => {
                switch (shape.getType()) {
                    case ShapeType.RECTANGLE:
                        return <RectangleView
                            key={shape.getId()}
                            shape={shape}
                            scaleFactor={scaleFactor}
                            moveShape={moveShape}
                        />
                    case ShapeType.TRIANGLE:
                        return <TriangleView
                            key={shape.getId()}
                            shape={shape}
                            scaleFactor={scaleFactor}
                            moveShape={moveShape}
                        />
                    case ShapeType.ELLIPSE:
                        return <EllipseView
                            key={shape.getId()}
                            shape={shape}
                            scaleFactor={scaleFactor}
                            moveShape={moveShape}
                        />
                    default:
                        return null
                }
            })}
        </svg>
    )
}

export default DocumentView
