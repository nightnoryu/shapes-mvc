import ShapeType from '../model/ShapeType'

interface DocumentControllerInterface
{
    addShape(type: ShapeType): void

    removeShape(id: string): void

    moveShape(id: string, deltaX: number, deltaY: number): void
}

export default DocumentControllerInterface
