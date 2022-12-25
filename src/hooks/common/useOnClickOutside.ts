import useEventListener from './useEventListener'
import React from 'react'

type Handler = () => void

function useOnClickOutside<T extends DocumentAndElementEventHandlers>(
    handler: Handler,
    ref: React.RefObject<T>,
    ignoredTargets: React.RefObject<T>[],
) {
    const isIgnored = (target: EventTarget | null) => {
        for (const ignoredTarget of ignoredTargets) {
            if (ignoredTarget.current === target) {
                return true
            }
        }
        return false
    }

    useEventListener('mousedown', e => {
        if (e.target !== ref.current && !isIgnored(e.target)) {
            handler()
        }
    })
}

export default useOnClickOutside
