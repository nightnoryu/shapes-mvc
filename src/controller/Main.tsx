import React from 'react'
import Document from '../model/Document'
import DocumentController from './DocumentController'
import DocumentInterface from '../model/DocumentInterface'
import DocumentControllerInterface from './DocumentControllerInterface'

const model = new Document()
const controller = new DocumentController(model)

function connect(
    mapModelToProps: ((model: DocumentInterface, ownProps: any) => any) | null,
    mapControllerToProps: ((controller: DocumentControllerInterface, ownProps: any) => any) | null,
): (WrappedView: any) => (props: any) => JSX.Element
{
    return (WrappedView) => {
        return (props: any): JSX.Element => {
            const modelProps = mapModelToProps
                ? mapModelToProps(model, props)
                : {}

            const controllerProps = mapControllerToProps
                ? mapControllerToProps(controller, props)
                : {}

            return (
                <WrappedView
                    {...modelProps}
                    {...controllerProps}
                />
            )
        }
    }
}

export {
    connect,
}
