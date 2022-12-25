import Frame from '../../../../model/common/Frame'
import React from 'react'
import Settings from '../../../../model/Settings'
import Point from '../../../../model/common/Point'
import Dimensions from '../../../../model/common/Dimensions'

type SelectedOverlayProps = {
    frame: Frame
    delta: Point
    dimensions: Dimensions
}

function SelectedOverlay({ frame, delta, dimensions }: SelectedOverlayProps) {
    return (
        <rect
            x={frame.leftTop.x}
            y={frame.leftTop.y}
            width={dimensions.width}
            height={dimensions.height}
            fill={Settings.SELECTED_OVERLAY_FILL}
            stroke={Settings.SELECTED_OVERLAY_STROKE}
            strokeWidth={Settings.SELECTED_OVERLAY_STROKE_WIDTH}
            opacity={Settings.SELECTED_OVERLAY_OPACITY}
            style={{
                transform: `translate(${delta.x}px, ${delta.y}px)`,
                pointerEvents: 'none',
            }}
        />
    )
}

export default SelectedOverlay
