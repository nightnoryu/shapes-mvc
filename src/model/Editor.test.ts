import { mock, mockClear } from 'jest-mock-extended'
import ShapeInterface from './ShapeInterface'

describe('whatever', () => {
    const mockShape = mock<ShapeInterface>()
    mockClear(mockShape)

    test('1 + 2 equals 3', () => {
        expect(1 + 2).toEqual(3)
    })
})
