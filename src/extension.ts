/**
 * Yox Snippets - VSCode Extension entry point.
 * Provides Yox framework code snippets.
 *
 * @author Eno Yao
 */

import * as vscode from 'vscode';

/**
 * Called when the extension is activated.
 * The extension is activated the first time a Yox snippet command is executed.
 */
export function activate(context: vscode.ExtensionContext): void {
  console.log('Congratulations, your extension "yox-extension" is now active!');
}

/** Called when the extension is deactivated. */
export function deactivate(): void {
  // No cleanup needed
}
