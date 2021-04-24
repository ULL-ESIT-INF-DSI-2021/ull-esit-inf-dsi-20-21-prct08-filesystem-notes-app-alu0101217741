import * as fs from 'fs';
import * as chalk from 'chalk';

export type TypeColor = 'red' | 'green' |'blue' | 'yellow';

export class Note {
  constructor() {}

  addNote(userName: string, title: string, message: string, color: TypeColor): string {
    if (fs.existsSync(`notes/${userName}/${title}.json`)) {
      console.log(chalk.bold.red('Note title taken!'));
      return 'Note title taken!';
    }
    const jsonText = `{"title": "${title}", "message": "${message}", "color": "${color}"}`;
    fs.mkdirSync(`notes/${userName}`, {recursive: true});
    fs.appendFileSync(`notes/${userName}/${title}.json`, jsonText);
    console.log(chalk.bold.green('New note added!'));
    return 'New note added!';
  }

  modifyNote(userName: string, title: string, message: string, color: TypeColor): string {
    if (!fs.existsSync(`notes/${userName}/${title}.json`)) {
      console.log(chalk.bold.red('The note you want to modify does not exist!'));
      return 'The note you want to modify does not exist!';
    }
    const jsonText = `{"title": "${title}", "message": "${message}", "color": "${color}"}`;
    fs.writeFileSync(`notes/${userName}/${title}.json`, jsonText);
    console.log(chalk.bold.green('Note modified!'));
    return 'Note modified!';
  }

  removeNote(userName: string, title: string): string {
    if (!fs.existsSync(`notes/${userName}/${title}.json`)) {
      console.log(chalk.bold.red('Note not found'));
      return 'Note not found';
    }
    fs.rmSync(`notes/${userName}/${title}.json`);
    console.log(chalk.bold.green('Note removed!'));
    return 'Note removed!';
  }

  showNotes(userName: string): string {
    if (!fs.existsSync(`notes/${userName}`)) {
      console.log(chalk.bold.red('You have never saved a note'));
      return 'You have never saved a note';
    }
    let textNotes: string = '';
    const filesInDirectory: string[] = fs.readdirSync(`notes/${userName}`);
    console.log('Your notes');
    filesInDirectory.forEach((file) => {
      const contentFile: string = fs.readFileSync(`notes/${userName}/${file}`, {encoding: 'utf-8'});
      const jsonContent = JSON.parse(contentFile);
      console.log(chalk.bold.keyword(jsonContent.color)(jsonContent.title));
      textNotes += jsonContent.title + ' ';
    });
    return textNotes;
  }

  readNote(userName: string, title: string): string {
    if (!fs.existsSync(`notes/${userName}/${title}.json`)) {
      console.log(chalk.bold.red('Note not found'));
      return 'Note not found';
    }
    const contentFile: string = fs.readFileSync(`notes/${userName}/${title}.json`, {encoding: 'utf-8'});
    const jsonContent = JSON.parse(contentFile);
    console.log(chalk.bold.keyword(jsonContent.color)(jsonContent.title +
                                                '\n' + jsonContent.message));
    return jsonContent.title + '\n' + jsonContent.message;
  }
}
