import useEventListener from './useEventListener'
import React from 'react'

type Handler = () => void

function useOnClickOutside<T extends DocumentAndElementEventHandlers>(
    handler: Handler,
    ref: React.RefObject<T>,
) {
    useEventListener('mousedown', e => {
        if (e.target !== ref.current) {
            handler()
        }
    })
}

export default useOnClickOutside
