import React, { useEffect, useState } from 'react'
import useEventListener from '../useEventListener'
import Settings from '../../model/Settings'
import DOCUMENT_WIDTH = Settings.DOCUMENT_WIDTH

function useScaleFactorForDragAndDrop<T extends Element>(
    ref: React.RefObject<T>,
): number
{
    const [scaleFactor, setScaleFactor] = useState(1)

    const onResize = () => {
        if (ref?.current)
        {
            setScaleFactor(DOCUMENT_WIDTH / ref.current.getBoundingClientRect().width)
        }
    }

    useEffect(onResize, [ref?.current])
    useEventListener('resize', onResize)

    return scaleFactor
}

export default useScaleFactorForDragAndDrop
