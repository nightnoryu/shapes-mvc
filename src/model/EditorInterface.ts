import ShapeInterface from './ShapeInterface'
import Frame from './common/Frame'
import ShapeViewInterface from './ShapeViewInterface'

type Listener = () => void
type SetFrameCallback = (frame: Frame) => Frame

interface EditorInterface {
    getShapes(): ShapeViewInterface[]

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
