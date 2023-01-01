import useHotkey from '../common/useHotkey'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeDeletion(
    selectedShape: ShapeInterface | null,
    removeShape: (id: string) => void,
) {
    useHotkey('Delete', () => {
        if (selectedShape) {
            removeShape(selectedShape.getId())
        }
    })
}

export default useShapeDeletion
