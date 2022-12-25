import { ForwardedRef, forwardRef } from 'react'
import Point from '../../../../model/common/Point'
import ShapeViewInterface from '../../../../model/ShapeViewInterface'
import Settings from '../../../../model/Settings'

type ResizeAnchorProps = {
    shape: ShapeViewInterface
    delta: Point
}

const ResizeAnchor = forwardRef(({ shape, delta }: ResizeAnchorProps, ref: ForwardedRef<SVGRectElement>) => (
    <rect
        x={shape.getFrame().leftTop.x + shape.getFrame().width - Settings.RESIZE_ANCHOR_WIDTH / 2}
        y={shape.getFrame().leftTop.y + shape.getFrame().height - Settings.RESIZE_ANCHOR_HEIGHT / 2}
        width={Settings.RESIZE_ANCHOR_WIDTH}
        height={Settings.RESIZE_ANCHOR_HEIGHT}
        fill={Settings.SELECTED_OVERLAY_STROKE}
        style={{
            transform: `translate(${delta.x}px, ${delta.y}px)`,
            cursor: 'se-resize',
        }}
        ref={ref}
    />
))

export default ResizeAnchor
