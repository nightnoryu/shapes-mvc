import DocumentInterface from './DocumentInterface'
import ShapeInterface from './ShapeInterface'

class Document implements DocumentInterface
{
    private _shapes: ShapeInterface[] = []

    getShapes(): ShapeInterface[]
    {
        return this._shapes
    }

    getShapeById(id: string): ShapeInterface | null
    {
        const shape = this._shapes.find(shape => shape.getId() === id)
        if (!shape)
        {
            return null
        }

        return shape
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
