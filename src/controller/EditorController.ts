import EditorControllerInterface from './EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import Shape from '../model/Shape'
import { v4 as generateUuid } from 'uuid'
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

    private readonly _editor: EditorInterface

    constructor(editor: EditorInterface) {
        this._editor = editor
    }

    addShape(type: ShapeType): void {
        this._editor.addShape(new Shape(generateUuid(), type, EditorController._DEFAULT_FRAME))
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

    resizeShape(id: string, width: number, height: number) {
        this._editor.setShapeFrame(id, frame => ({
            ...frame,
            width,
            height,
        }))
    }
}

export default EditorController
