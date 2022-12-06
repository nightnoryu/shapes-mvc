import ShapeInterface from './ShapeInterface'

interface DocumentInterface
{
    getShapes(): ShapeInterface[]

    addShape(shape: ShapeInterface): void

    removeShape(id: string): void
}

export default DocumentInterface
