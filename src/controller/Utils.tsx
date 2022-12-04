import React from 'react'

const model = {
    x: 1,
    y: 2,
}

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
