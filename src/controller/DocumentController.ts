import DocumentInterface from '../model/DocumentInterface'
import DocumentControllerInterface from './DocumentControllerInterface'

class DocumentController implements DocumentControllerInterface
{
    private readonly _model: DocumentInterface

    constructor(model: DocumentInterface)
    {
        this._model = model
    }

    testAction(): void
    {
        alert('Hello!')
    }
}

export default DocumentController
