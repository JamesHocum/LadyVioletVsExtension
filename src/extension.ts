// In your extension.ts file
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "violet-extension" is now active!'); // Debugging Check

    let disposable = vscode.commands.registerCommand('violet-extension.openVioletTerminal', () => {
        vscode.window.showInformationMessage('Violet Terminal is Opening!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

