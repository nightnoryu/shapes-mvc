import { useEffect, useState } from 'react'

function useUpdateOnPropsChange<T>(prop: T)
{
    const [changed, setChanged] = useState(false)
    useEffect(() => {
        setChanged(!changed)
    }, [changed, prop])
}

export default useUpdateOnPropsChange
