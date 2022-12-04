import React from 'react'
import Settings from '../../model/Settings'

function DocumentView(): JSX.Element
{
    return (
        <svg
            viewBox={`0 0 ${Settings.DOCUMENT_WIDTH} ${Settings.DOCUMENT_HEIGHT}`}
            tabIndex={0}
            onDragOver={event => event.preventDefault()}
        >
            {/* TODO: map shapes to displays */}
        </svg>
    )
}

export default DocumentView
