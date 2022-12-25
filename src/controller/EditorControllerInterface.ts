import ShapeType from '../model/ShapeType'

interface EditorControllerInterface {
    addShape(type: ShapeType): void

    removeShape(id: string): void

    moveShape(id: string, deltaX: number, deltaY: number): void

    resizeShape(id: string, width: number, height: number): void
}

export default EditorControllerInterface
