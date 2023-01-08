import React, { useState } from 'react'
import useEventListener from '../common/useEventListener'

function useShapeSelection(ref: React.RefObject<SVGElement>) {
    const [selectedId, setSelectedId] = useState('')

    useEventListener('mousedown', event => {
        if (event.target === ref.current) {
            setSelectedId('')
        }
    })

    return {
        selectedId,
        setSelectedId,
    }
}

export default useShapeSelection
