import React from 'react'
import { connect } from '../../../controller/Utils'
import Point from '../../../model/Point'

type ButtonProps = {
    label: string
    action: () => void
}

function Button({ label, action }: ButtonProps): JSX.Element
{
    return (
        <button
            onClick={event => {
                event.preventDefault()
                action()
            }}
        >
            {label}
        </button>
    )
}

const mapModelToProps = (model: Point, ownProps: ButtonProps): ButtonProps => ({
    ...ownProps,
    label: model.x.toString(),
})

export default connect(mapModelToProps)(Button)
