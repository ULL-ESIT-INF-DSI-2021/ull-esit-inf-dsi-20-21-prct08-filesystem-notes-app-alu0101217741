import * as yargs from 'yargs';
import * as chalk from 'chalk';
import {Note} from './note';

const note = new Note();

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User who is going to add the note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'The title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'The text of the note',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'The color of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
        typeof argv.body === 'string' && typeof argv.color === 'string') {
      if (argv.color == 'red' || argv.color == 'green' ||
          argv.color == 'blue' || argv.color == 'yellow') {
        note.addNote(argv.user, argv.title, argv.body, argv.color);
      } else {
        console.log(chalk.bold.red('Note color must be red, green, blue, or yellow'));
      }
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'Modify a note',
  builder: {
    user: {
      describe: 'User who is going to modify a note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'The title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'The text of the note',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'The color of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
          typeof argv.body === 'string' && typeof argv.color === 'string') {
      if (argv.color == 'red' || argv.color == 'green' ||
            argv.color == 'blue' || argv.color == 'yellow') {
        note.modifyNote(argv.user, argv.title, argv.body, argv.color);
      } else {
        console.log(chalk.bold.red('Note color must be red, green, blue, or yellow'));
      }
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'Delete a note',
  builder: {
    user: {
      describe: 'User who is going to delete the note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'The title of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      note.removeNote(argv.user, argv.title);
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'List the titles of the notes',
  builder: {
    user: {
      describe: 'User who will show his notes',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      note.showNotes(argv.user);
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a specific note from the list',
  builder: {
    user: {
      describe: 'User who will read a note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'The title of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      note.readNote(argv.user, argv.title);
    }
  },
});

yargs.parse();
