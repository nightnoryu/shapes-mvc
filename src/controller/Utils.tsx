import React from 'react'
import Document from '../model/Document'
import Shape from '../model/Shape'
import ShapeType from '../model/ShapeType'
import { v4 as uuidv4 } from 'uuid'

const model = new Document()
model.addShape(new Shape(uuidv4(), ShapeType.RECTANGLE, {
    leftTop: {
        x: 100,
        y: 100,
    },
    width: 100,
    height: 100,
}))

function connect(
    mapModelToProps: (model: any, ownProps: any) => any,
): (WrappedView: any) => (props: any) => JSX.Element
{
    return (WrappedView) => {
        return (props: any): JSX.Element => {
            return (
                <WrappedView {...mapModelToProps(model, props)} />
            )
        }
    }
}

export {
    connect,
}
