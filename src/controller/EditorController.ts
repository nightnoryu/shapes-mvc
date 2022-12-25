import EditorControllerInterface from './EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import Shape from '../model/Shape'
import { v4 as uuid } from 'uuid'
import { EditorInterface, SetFrameCallback } from '../model/EditorInterface'

class EditorController implements EditorControllerInterface {
    private static readonly _DEFAULT_FRAME = {
        leftTop: {
            x: 100,
            y: 100,
        },
        width: 100,
        height: 100,
    }

    private readonly _editor: EditorInterface

    constructor(editor: EditorInterface) {
        this._editor = editor
    }

    addShape(type: ShapeType): void {
        this._editor.addShape(new Shape(uuid(), type, EditorController._DEFAULT_FRAME))
    }

    removeShape(id: string): void {
        this._editor.removeShape(id)
    }

    moveShape(id: string, deltaX: number, deltaY: number): void {
        this._editor.setShapeFrame(id, frame => {
            return {
                ...frame,
                leftTop: {
                    x: frame.leftTop.x + deltaX,
                    y: frame.leftTop.y + deltaY,
                },
            }
        })
    }

    setShapeFrame(id: string, callback: SetFrameCallback) {
        this._editor.setShapeFrame(id, callback)
    }
}

export default EditorController
