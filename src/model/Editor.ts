import ShapeInterface from './ShapeInterface'
import { EditorInterface, Listener, SetFrameCallback } from './EditorInterface'

class Editor implements EditorInterface {
    private _shapes: ShapeInterface[] = []
    private _listeners: Listener[] = []

    getShapes(): ShapeInterface[] {
        return this._shapes
    }

    addShape(shape: ShapeInterface) {
        this._shapes.push(shape)
        this._notify()
    }

    setShapeFrame(id: string, callback: SetFrameCallback) {
        const shape = this._shapes.find(shape => shape.getId() === id)
        if (!shape) {
            throw new Error('shape not found')
        }

        const oldFrame = shape.getFrame()
        const newFrame = callback(oldFrame)
        shape.setFrame(newFrame)

        if (oldFrame !== newFrame) {
            this._notify()
        }
    }

    removeShape(id: string) {
        const oldLength = this._shapes.length
        this._shapes = this._shapes.filter(shape => shape.getId() !== id)

        if (oldLength !== this._shapes.length) {
            this._notify()
            return
        }

        throw new Error('shape not found')
    }

    subscribe(listener: Listener) {
        this._listeners.push(listener)
    }

    private _notify() {
        this._listeners.forEach(listener => listener())
    }
}

export default Editor
