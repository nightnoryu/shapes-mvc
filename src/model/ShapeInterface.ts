import Frame from './common/Frame'
import ShapeType from './ShapeType'

interface ShapeInterface
{
    getId(): string;

    getType(): ShapeType;

    getFrame(): Frame;

    setFrame(frame: Frame): void;
}

export default ShapeInterface
