import ShapeType from '../model/ShapeType'
import { SetFrameCallback } from '../model/EditorInterface'

interface EditorControllerInterface {
    addShape(type: ShapeType): void

    removeShape(id: string): void

    moveShape(id: string, deltaX: number, deltaY: number): void

    setShapeFrame(id: string, callback: SetFrameCallback): void
}

export default EditorControllerInterface
