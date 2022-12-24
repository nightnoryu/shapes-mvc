import EditorInterface from '../model/EditorInterface'
import EditorControllerInterface from './EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import Shape from '../model/Shape'
import { v4 as uuid } from 'uuid'

class DocumentController implements EditorControllerInterface
{
    private static readonly _DEFAULT_FRAME = {
        leftTop: {
            x: 100,
            y: 100,
        },
        width: 100,
        height: 100,
    }

    private readonly _model: EditorInterface

    constructor(model: EditorInterface)
    {
        this._model = model
    }

    addShape(type: ShapeType): void
    {
        this._model.addShape(new Shape(uuid(), type, DocumentController._DEFAULT_FRAME))
    }

    removeShape(id: string): void
    {
        this._model.removeShape(id)
    }

    moveShape(id: string, deltaX: number, deltaY: number): void
    {
        const shape = this._model.getShapeById(id)
        if (!shape)
        {
            return
        }
        const leftTop = shape.getFrame().leftTop

        shape.setFrame({
            ...shape.getFrame(),
            leftTop: {
                x: leftTop.x + deltaX,
                y: leftTop.y + deltaY,
            },
        })
    }
}

export default DocumentController
