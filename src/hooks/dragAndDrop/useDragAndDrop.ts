import React, { useEffect, useRef } from 'react'

type DragAndDropHandler = (event: MouseEvent) => void;

function useDragAndDrop<T extends EventTarget>(
    ref: React.RefObject<T> | null,
    onStart?: DragAndDropHandler,
    onMove?: DragAndDropHandler,
    onFinish?: DragAndDropHandler,
): void {
    const savedOnFinish = useRef<DragAndDropHandler>()

    const onMouseDown = (e: Event) => {
        const event = e as MouseEvent
        if (event.button !== 0) {
            return
        }

        onStart?.(event)

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (event: MouseEvent) => {
        onMove?.(event)
    }

    const onMouseUp = (event: MouseEvent) => {
        savedOnFinish.current?.(event)

        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    useEffect(() => {
        if (savedOnFinish.current !== onFinish) {
            savedOnFinish.current = onFinish
        }

        const node = ref?.current
        node?.addEventListener('mousedown', onMouseDown)

        return () => {
            node?.removeEventListener('mousedown', onMouseDown)
        }
    })
}

export default useDragAndDrop
