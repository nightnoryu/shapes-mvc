import ShapeInterface from './ShapeInterface'
import Frame from './Frame'

class Shape implements ShapeInterface
{
    getFrame(): Frame
    {
        return {
            leftTop: {
                x: 1,
                y: 1,
            },
            width: 1,
            height: 1,
        }
    }

    setFrame(frame: Frame): void
    {
    }
}

export default Shape
