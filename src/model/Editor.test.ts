import { EditorInterface } from './EditorInterface'
import Editor from './Editor'
import Shape from './Shape'
import ShapeType from './ShapeType'

describe('editor', () => {
    const editor: EditorInterface = new Editor()

    test('editor is just created', () => {
        expect(editor.getShapes()).toHaveLength(0)
    })

    describe('adding shapes', () => {
        test('adding a shape adds it to the list', () => {

        })
    })

    describe('setting shapes frame', () => {
        test('setting non-existing shapes frame throws an error', () => {
            const frame = {
                leftTop: {
                    x: 0,
                    y: 0,
                },
                width: 100,
                height: 100,
            }
            expect(() => editor.setShapeFrame('fuck', () => frame)).toThrow()
        })

        test('settings shapes frame changes it and notifies observers', () => {
            // TODO
        })
    })

    describe('removing shapes', () => {
        test('removing non-existing shape throws an error', () => {
            expect(() => editor.removeShape('fuck')).toThrow()
        })

        test('removing existing shape removes it from the list and notifies observers', () => {
            const shape = new Shape(
                'fuck',
                ShapeType.RECTANGLE,
                {
                    leftTop: {
                        x: 0,
                        y: 0,
                    },
                    width: 100,
                    height: 100,
                },
            )
            let called = false
            editor.addShape(shape)
            editor.subscribe(() => {
                called = true
            })
            editor.removeShape('fuck')

            expect(editor.getShapes()).toHaveLength(0)
            expect(called).toEqual(true)
        })
    })
})
