import ShapeInterface from '../model/ShapeInterface'
import Shape from '../model/Shape'
import { v4 as generateUuid } from 'uuid'
import ShapeType from '../model/ShapeType'

class ShapeFactory {
    private static readonly _DEFAULT_FRAME = {
        leftTop: {
            x: 100,
            y: 100,
        },
        width: 100,
        height: 100,
    }

    static create(type: ShapeType): ShapeInterface {
        return new Shape(generateUuid(), type, ShapeFactory._DEFAULT_FRAME)
    }
}

export default ShapeFactory
