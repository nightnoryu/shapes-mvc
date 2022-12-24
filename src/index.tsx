import React from 'react'
import './index.css'
import View from './View'
import ReactDOM from 'react-dom/client'
import Editor from './model/Editor'
import EditorController from './controller/EditorController'

const editor = new Editor()
const controller = new EditorController(editor)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

function render() {
    root.render(
        <React.StrictMode>
            <View shapes={editor.getShapes()} controller={controller} />
        </React.StrictMode>,
    )
}

editor.subscribe(render)
render()
