import useHotkey from '../common/useHotkey'
import ShapeInterface from '../../model/ShapeInterface'

function useShapeDeletion(
    selectedShape: ShapeInterface | null,
    setSelectedShape: (shape: ShapeInterface | null) => void,
    removeShape: (id: string) => void,
) {
    useHotkey('Delete', () => {
        if (selectedShape) {
            removeShape(selectedShape.getId())
            setSelectedShape(null)
        }
    })
}

export default useShapeDeletion
