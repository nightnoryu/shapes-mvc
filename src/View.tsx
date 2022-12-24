import React from 'react'
import Menu from './view/Menu/Menu'
import DocumentView from './view/DocumentView/DocumentView'

function App(): JSX.Element
{
    return (
        <div className="App">
            <Menu />
            <DocumentView />
        </div>
    )
}

export default App
