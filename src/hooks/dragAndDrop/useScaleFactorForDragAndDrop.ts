import React, { useEffect, useState } from 'react'
import useEventListener from '../useEventListener'

function useScaleFactorForDragAndDrop<T extends Element>(
    ref: React.RefObject<T>,
    modelWidth: number,
): number {
    const [scaleFactor, setScaleFactor] = useState(1)

    const onResize = () => {
        if (ref?.current) {
            setScaleFactor(modelWidth / ref.current.getBoundingClientRect().width)
        }
    }

    useEffect(onResize, [ref, modelWidth])
    useEventListener('resize', onResize)

    return scaleFactor
}

export default useScaleFactorForDragAndDrop
