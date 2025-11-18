#!/usr/bin/env node

const FileManager = require('../lib/fileManager');
const chalk = require('chalk');
const inquirer = require('inquirer');

const fm = new FileManager();
const args = process.argv.slice(2);

// Event listeners
fm.on('fileCreated', name => console.log(chalk.green(`File "${name}" created!`)));
fm.on('folderCreated', name => console.log(chalk.green(`Folder "${name}" created!`)));
fm.on('fileAppended', name => console.log(chalk.yellow(`Content appended to "${name}"`)));
fm.on('fileDeleted', name => console.log(chalk.red(`File "${name}" deleted`)));
fm.on('folderDeleted', name => console.log(chalk.red(`Folder "${name}" deleted`)));

async function cli() {
  const command = args[0];

  switch (command) {
    case 'create-folder':
      fm.createFolder(args[1]);
      break;
    case 'delete-folder':
      fm.deleteFolder(args[1]);
      break;
    case 'create-file':
      fm.createFile(args[1], args[2] || '');
      break;
    case 'read-file':
      fm.readFile(args[1]);
      break;
    case 'append-file':
      fm.appendFile(args[1], args[2] || '');
      break;
    case 'delete-file':
      fm.deleteFile(args[1]);
      break;
    case 'sys-info':
      fm.systemInfo();
      break;
    case 'parse-url':
      fm.parseUrl(args[1]);
      break;
    case 'interactive':
      await interactiveMenu();
      break;
    default:
      console.log(chalk.blue(`
CLI File Manager Usage:

  filemgr create-folder <folderName>
  filemgr delete-folder <folderName>
  filemgr create-file <fileName> [content]
  filemgr read-file <fileName>
  filemgr append-file <fileName> <content>
  filemgr delete-file <fileName>
  filemgr sys-info
  filemgr parse-url <url>
  filemgr interactive
`));
  }
}

// Interactive menu using inquirer
async function interactiveMenu() {
  const choices = [
    'Create Folder',
    'Delete Folder',
    'Create File',
    'Read File',
    'Append File',
    'Delete File',
    'System Info',
    'Parse URL',
    'Exit'
  ];

  let exit = false;
  while (!exit) {
    const { action } = await inquirer.prompt([
      { type: 'list', name: 'action', message: 'Select an action', choices }
    ]);

    switch (action) {
      case 'Create Folder': {
        const { folder } = await inquirer.prompt([{ name: 'folder', message: 'Folder Name:' }]);
        fm.createFolder(folder);
        break;
      }
      case 'Delete Folder': {
        const { folder } = await inquirer.prompt([{ name: 'folder', message: 'Folder Name:' }]);
        fm.deleteFolder(folder);
        break;
      }
      case 'Create File': {
        const { file, content } = await inquirer.prompt([
          { name: 'file', message: 'File Name:' },
          { name: 'content', message: 'Initial Content:' }
        ]);
        fm.createFile(file, content);
        break;
      }
      case 'Read File': {
        const { file } = await inquirer.prompt([{ name: 'file', message: 'File Name:' }]);
        fm.readFile(file);
        break;
      }
      case 'Append File': {
        const { file, content } = await inquirer.prompt([
          { name: 'file', message: 'File Name:' },
          { name: 'content', message: 'Content to append:' }
        ]);
        fm.appendFile(file, content);
        break;
      }
      case 'Delete File': {
        const { file } = await inquirer.prompt([{ name: 'file', message: 'File Name:' }]);
        fm.deleteFile(file);
        break;
      }
      case 'System Info':
        fm.systemInfo();
        break;
      case 'Parse URL': {
        const { urlInput } = await inquirer.prompt([{ name: 'urlInput', message: 'Enter URL:' }]);
        fm.parseUrl(urlInput);
        break;
      }
      case 'Exit':
        exit = true;
        break;
    }
  }
}

cli();
