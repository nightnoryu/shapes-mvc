import useHotkey from '../common/useHotkey'

function useShapeDeletion(
    selectedId: string,
    removeShape: (id: string) => void,
) {
    useHotkey('Delete', () => {
        if (selectedId !== '') {
            removeShape(selectedId)
        }
    })
}

export default useShapeDeletion
