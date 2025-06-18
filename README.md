# Violet Extension

A powerful VS Code extension that provides a custom terminal interface and code generation capabilities.

## Features

- **Violet Terminal**: A custom terminal interface accessible from the sidebar
- **WebSocket Communication**: Connect to a local WebSocket server
- **Code Generation**: Generate basic function templates with a single command

## Monetization Options

This extension offers optional monetization features:
- Donations via GitHub Sponsors
- Sponsorship opportunities
- Free basic functionality (no paywalled features)

You can customize monetization settings in `monetization.config.json`. Note: The owner (@JamesHocum) is excluded from monetization.

## Requirements

- Visual Studio Code version 1.81.0 or higher
- Node.js and npm installed

## Installation

1. Download the VSIX file from the releases section
2. Open VS Code
3. Go to Extensions view (Ctrl+Shift+X)
4. Click on the "..." menu in the top-right corner
5. Select "Install from VSIX..."
6. Choose the downloaded VSIX file

## Usage

### Opening the Terminal

- Click on the Violet icon in the Activity Bar
- Or use the command palette (Ctrl+Shift+P) and search for "Open Violet Terminal"

### Generating a Function

1. Open a file in the editor
2. Use the command palette (Ctrl+Shift+P) and search for "Generate Basic Function"
3. A basic function template will be inserted at the cursor position

## Development

### Building the Extension

```bash
# Install dependencies
npm install

# Compile the extension
npm run compile
```

### Running the Extension

Press F5 in VS Code to launch a new window with the extension loaded.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
