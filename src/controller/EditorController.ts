import EditorControllerInterface from './EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import Shape from '../model/Shape'
import { v4 as uuid } from 'uuid'
import { EditorInterface } from '../model/EditorInterface'

class EditorController implements EditorControllerInterface {
    private static readonly _DEFAULT_FRAME = {
        leftTop: {
            x: 100,
            y: 100,
        },
        width: 100,
        height: 100,
    }

    private readonly _model: EditorInterface

    constructor(model: EditorInterface) {
        this._model = model
    }

    addShape(type: ShapeType): void {
        this._model.addShape(new Shape(uuid(), type, EditorController._DEFAULT_FRAME))
    }

    removeShape(id: string): void {
        this._model.removeShape(id)
    }

    moveShape(id: string, deltaX: number, deltaY: number): void {
        this._model.setShapeFrame(id, frame => {
            return {
                ...frame,
                leftTop: {
                    x: frame.leftTop.x + deltaX,
                    y: frame.leftTop.y + deltaY,
                },
            }
        })
    }
}

export default EditorController
