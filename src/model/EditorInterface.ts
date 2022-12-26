import ShapeInterface from './ShapeInterface'
import Frame from './common/Frame'

type Listener = () => void
type SetFrameCallback = (frame: Frame) => Frame

interface EditorInterface {
    getShapes(): ShapeInterface[]

    addShape(shape: ShapeInterface): void

    setShapeFrame(id: string, callback: SetFrameCallback): void

    removeShape(id: string): void

    subscribe(listener: Listener): void
}

export {
    EditorInterface,
    Listener,
    SetFrameCallback,
}
