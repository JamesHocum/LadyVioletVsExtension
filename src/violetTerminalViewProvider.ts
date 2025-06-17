import * as vscode from 'vscode';
import WebSocket from 'ws';

export class VioletTerminalViewProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView;
    private _extensionUri: vscode.Uri;
    private _ws: WebSocket;
    private _context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this._extensionUri = context.extensionUri;
        this._context = context;
        this._ws = new WebSocket('ws://localhost:8765');

        this._ws.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        this._ws.onmessage = (event: WebSocket.MessageEvent) => {
            if (this._view) {
                this._view.webview.postMessage({ type: 'message', value: event.data });
            }
        };

        this._ws.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        this._ws.onerror = (error: WebSocket.ErrorEvent) => {
            console.error('WebSocket error:', error);
        };
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'send':
                    this._ws.send(message.text);
                    break;
            }
        });
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'out', 'webview.js'));
        const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'terminal.css'));

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${styleUri}" rel="stylesheet">
                <title>Violet Terminal</title>
            </head>
            <body>
                <div id="terminal-container">
                    <div id="terminal-output"></div>
                    <input type="text" id="terminal-input" placeholder="Enter command and press Enter">
                </div>
                <script src="${scriptUri}"></script>
            </body>
            </html>
        `;
    }
}
