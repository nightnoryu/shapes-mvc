import ShapeInterface from './ShapeInterface'

interface DocumentInterface
{
    getShapes(): ShapeInterface[]

    getShapeById(id: string): ShapeInterface | null

    addShape(shape: ShapeInterface): void

    removeShape(id: string): void
}

export default DocumentInterface
