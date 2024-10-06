import * as vscode from 'vscode';
import { DOMParser } from "@xmldom/xmldom";

export class YupKernel {
	private readonly _id = 'yup-notebook-serializer-kernel';
	private readonly _label = 'Yup Notebook Kernel';
	private readonly _supportedLanguages = ['json','xml'];

	private _executionOrder = 0;
	private readonly _controller: vscode.NotebookController;

	constructor() {

		this._controller = vscode.notebooks.createNotebookController(this._id,
			'yup-notebook-serializer',
			this._label);

		this._controller.supportedLanguages = this._supportedLanguages;
		this._controller.supportsExecutionOrder = true;
		this._controller.executeHandler = this._executeAll.bind(this);
	}

	dispose(): void {
		this._controller.dispose();
	}

	private _executeAll(cells: vscode.NotebookCell[], _notebook: vscode.NotebookDocument, _controller: vscode.NotebookController): void {
		for (const cell of cells) {
			this._doExecution(cell);
		}
	}

	private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
		const execution = this._controller.createNotebookCellExecution(cell);

		execution.executionOrder = ++this._executionOrder;
		execution.start(Date.now());

		try {
			let obj: any;
			const text = cell.document.getText()
			switch (cell.document.languageId) {
				case 'json':
					obj = JSON.parse(text)
					break;
				case 'xml':
					const parser = new DOMParser();
        			const doc = parser.parseFromString(text, "text/xml");
					const el = doc.firstChild as Element
					const {tagName, attributes} = el
					// @ts-ignore
					obj = {tagName, lineNumber: el.lineNumber }
					break;
			
				default:
					break;
			}

			execution.replaceOutput([new vscode.NotebookCellOutput([
				vscode.NotebookCellOutputItem.json(obj)
			])]);

			execution.end(true, Date.now());
		} catch (err) {
			execution.replaceOutput([new vscode.NotebookCellOutput([
				vscode.NotebookCellOutputItem.error(err as Error)
			])]);
			execution.end(false, Date.now());
		}
	}
}
