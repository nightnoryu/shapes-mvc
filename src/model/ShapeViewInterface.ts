import ShapeType from './ShapeType'
import Frame from './common/Frame'

interface ShapeViewInterface {
    getId(): string;

    getType(): ShapeType;

    getFrame(): Frame;
}

export default ShapeViewInterface
