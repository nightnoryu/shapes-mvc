import Frame from './common/Frame'
import ShapeViewInterface from './ShapeViewInterface'

interface ShapeInterface extends ShapeViewInterface {
    setFrame(frame: Frame): void;
}

export default ShapeInterface
