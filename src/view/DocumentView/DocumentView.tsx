import React from 'react'
import Settings from '../../model/Settings'
import styles from './DocumentView.module.css'
import ShapeType from '../../model/ShapeType'
import RectangleView from './RectangleView/RectangleView'
import TriangleView from './TriangleView/TriangleView'
import EllipseView from './EllipseView/EllipseView'
import ShapeViewInterface from '../../model/ShapeViewInterface'

type DocumentViewProps = {
    shapes: ShapeViewInterface[]
}

function DocumentView({ shapes }: DocumentViewProps): JSX.Element {
    return (
        <svg
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
                        />
                    case ShapeType.TRIANGLE:
                        return <TriangleView
                            key={shape.getId()}
                            shape={shape}
                        />
                    case ShapeType.ELLIPSE:
                        return <EllipseView
                            key={shape.getId()}
                            shape={shape}
                        />
                    default:
                        return null
                }
            })}
        </svg>
    )
}

export default DocumentView
