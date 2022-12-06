import React from 'react'
import Document from '../model/Document'
import Shape from '../model/Shape'
import ShapeType from '../model/ShapeType'
import { v4 as uuidv4 } from 'uuid'
import DocumentController from './DocumentController'
import DocumentInterface from '../model/DocumentInterface'
import DocumentControllerInterface from './DocumentControllerInterface'

const model = new Document()
model.addShape(new Shape(uuidv4(), ShapeType.RECTANGLE, {
    leftTop: {
        x: 100,
        y: 100,
    },
    width: 100,
    height: 100,
}))

const controller = new DocumentController(model)

function connect(
    mapModelToProps: (model: DocumentInterface, ownProps: any) => any,
    mapControllerToProps?: (controller: DocumentControllerInterface, ownProps: any) => any,
): (WrappedView: any) => (props: any) => JSX.Element
{
    return (WrappedView) => {
        return (props: any): JSX.Element => {
            const controllerProps = mapControllerToProps
                ? mapControllerToProps(controller, props)
                : {}

            return (
                <WrappedView
                    {...mapModelToProps(model, props)}
                    {...controllerProps}
                />
            )
        }
    }
}

export {
    connect,
}
