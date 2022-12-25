import Shape from '../Shape'
import ShapeType from '../ShapeType'

describe('shape', () => {
    const frame = {
        leftTop: {
            x: 0,
            y: 0,
        },
        width: 100,
        height: 100,
    }
    const shape = new Shape('fuck', ShapeType.ELLIPSE, frame)

    test('creating a shape', () => {
        expect(shape.getId()).toEqual('fuck')
        expect(shape.getType()).toEqual(ShapeType.ELLIPSE)
        expect(shape.getFrame()).toEqual(frame)
    })

    test('changing shapes frame', () => {
        const newFrame = {
            leftTop: {
                x: 20,
                y: 0,
            },
            width: 100,
            height: 1337,
        }

        shape.setFrame(newFrame)

        expect(shape.getFrame()).toEqual(newFrame)
    })
})
