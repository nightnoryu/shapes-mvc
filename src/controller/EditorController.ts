import EditorControllerInterface from './EditorControllerInterface'
import ShapeType from '../model/ShapeType'
import { EditorInterface } from '../model/EditorInterface'
import ShapeFactory from '../factory/ShapeFactory'

class EditorController implements EditorControllerInterface {
    private readonly _editor: EditorInterface

    constructor(editor: EditorInterface) {
        this._editor = editor
    }

    addShape(type: ShapeType): void {
        this._editor.addShape(ShapeFactory.create(type))
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
