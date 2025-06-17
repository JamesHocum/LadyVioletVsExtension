import * as vscode from 'vscode';
import { VioletTerminalViewProvider } from './violetTerminalViewProvider';

export function activate(context: vscode.ExtensionContext) {

    const provider = new VioletTerminalViewProvider(context);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('violetTerminal', provider)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('violet-extension.openVioletTerminal', () => {
            vscode.commands.executeCommand('workbench.view.extension.violetSidebar');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('violet-extension.generateBasicFunction', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    editBuilder.insert(editor.selection.active, '\nfunction myFunc() {\n  // Your code here\n}\n');
                });
            }
        })
    );
}

export function deactivate() {}
