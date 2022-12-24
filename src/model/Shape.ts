import ShapeInterface from './ShapeInterface'
import Frame from './common/Frame'
import ShapeType from './ShapeType'

class Shape implements ShapeInterface {
    private readonly _id: string
    private readonly _type: ShapeType
    private _frame: Frame

    constructor(id: string, type: ShapeType, frame: Frame) {
        this._id = id
        this._type = type
        this._frame = frame
    }

    getId(): string {
        return this._id
    }

    getType(): ShapeType {
        return this._type
    }

    getFrame(): Frame {
        return this._frame
    }

    setFrame(frame: Frame): void {
        this._frame = frame
    }
}

export default Shape
