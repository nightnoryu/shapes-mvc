import { EditorInterface } from '../EditorInterface'
import Editor from '../Editor'
import Shape from '../Shape'
import ShapeType from '../ShapeType'

describe('editor', () => {
    let editor: EditorInterface
    const frame = {
        leftTop: {
            x: 0,
            y: 0,
        },
        width: 100,
        height: 100,
    }

    beforeEach(() => {
        editor = new Editor()
    })

    test('when editor is just created, it has no shapes', () => {
        expect(editor.getShapes()).toHaveLength(0)
    })

    describe('adding shapes', () => {
        test('adding a shape adds it to the list and notifies observers', () => {
            const shape = new Shape(
                'fuck',
                ShapeType.RECTANGLE,
                frame,
            )
            let called = false
            editor.subscribe(() => {
                called = true
            })
            editor.addShape(shape)

            expect(editor.getShapes()[0].getId()).toEqual('fuck')
            expect(editor.getShapes()[0].getType()).toEqual(ShapeType.RECTANGLE)
            expect(editor.getShapes()[0].getFrame()).toEqual(frame)
            expect(called).toEqual(true)
        })
    })

    describe('setting shapes frame', () => {
        test('setting non-existing shapes frame throws an error', () => {
            expect(() => editor.setShapeFrame('fuck', () => frame)).toThrow()
        })

        test('settings shapes frame changes it and notifies observers', () => {
            const shape = new Shape(
                'fuck',
                ShapeType.RECTANGLE,
                frame,
            )
            let called = false
            editor.addShape(shape)
            const newFrame = {
                leftTop: {
                    x: 0,
                    y: 0,
                },
                width: 120,
                height: 145,
            }
            editor.subscribe(() => {
                called = true
            })
            editor.setShapeFrame('fuck', () => newFrame)

            expect(editor.getShapes()[0].getFrame()).toEqual(newFrame)
            expect(called).toEqual(true)
        })
    })

    describe('removing shapes', () => {
        test('removing non-existing shape throws an error', () => {
            expect(() => editor.removeShape('whatever')).toThrow()
        })

        test('removing existing shape removes it from the list and notifies observers', () => {
            const shape = new Shape(
                'fuck',
                ShapeType.RECTANGLE,
                frame,
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
