import useEventListener from './useEventListener'
import React from 'react'

type Handler = (event: KeyboardEvent) => void

function useHotkey(
    key: string,
    handler: Handler,
    ref?: React.RefObject<DocumentAndElementEventHandlers>,
): void {
    useEventListener('keydown', (e: Event) => {
        const event = e as KeyboardEvent

        if (event.key === key) {
            event.preventDefault()
            handler(event)
        }
    }, ref)
}

export default useHotkey
