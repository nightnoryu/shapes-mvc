import DocumentInterface from './DocumentInterface'
import ShapeInterface from './ShapeInterface'

class Document implements DocumentInterface
{
    private _shapes: ShapeInterface[] = []

    getShapes(): ShapeInterface[]
    {
        return this._shapes
    }

    addShape(shape: ShapeInterface): void
    {
        this._shapes.push(shape)
    }

    removeShape(id: string): void
    {
        this._shapes = this._shapes.filter(shape => shape.getId() !== id)
    }
}

export default Document
