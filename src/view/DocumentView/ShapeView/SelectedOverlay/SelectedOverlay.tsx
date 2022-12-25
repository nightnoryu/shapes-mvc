import Frame from '../../../../model/common/Frame'
import React from 'react'
import Settings from '../../../../model/Settings'
import Point from '../../../../model/common/Point'

type SelectedOverlayProps = {
    frame: Frame
    delta: Point
}

function SelectedOverlay({ frame, delta }: SelectedOverlayProps) {
    return (
        <rect
            x={frame.leftTop.x}
            y={frame.leftTop.y}
            width={frame.width}
            height={frame.height}
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
