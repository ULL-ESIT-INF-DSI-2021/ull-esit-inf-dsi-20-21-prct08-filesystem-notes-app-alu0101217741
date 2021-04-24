import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import {Note} from '../src/note';


describe('Note class tests', () => {
  const note = Note.getNotes();

  it('A Note class object can be successfully created', () => {
    expect(note).not.to.be.equal(null);
  });

  it('Note.getNote() returns the objects note', () => {
    expect(Note.getNotes()).to.be.equal(note);
  });

  it('note.addNode("test", "Test note", "This is a test note", "green") returns "New note added!"', () => {
    expect(note.addNote('test', 'Test note', 'This is a test note', 'green')).to.be.equal('New note added!');
    expect(note.addNote('test', 'Test note 2', 'This is second a test note', 'blue')).to.be.equal('New note added!');
  });

  it('The note was created successfully', () => {
    expect(fs.existsSync(`notes/test/Test note.json`)).to.be.equal(true);
  });

  it('note.addNode("test", "Test note", "This is a test note", "green") returns "Note title taken!"', () => {
    expect(note.addNote('test', 'Test note', 'This is a test note', 'green')).to.be.equal('Note title taken!');
  });

  it('note.modifyNote("test", "Test note", "Testing the modify method", "blue") returns "Note modified!"', () => {
    expect(note.modifyNote('test', 'Test note', 'Testing the modify method', 'blue')).to.be.equal('Note modified!');
  });

  it('The file has been modified successfully', () => {
    expect(fs.readFileSync(`notes/test/Test note.json`, {encoding: 'utf-8'})).to.be.equal('{"title": "Test note", "message": "Testing the modify method", "color": "blue"}');
  });

  it('note.modifyNote("test", "Non-existent file", "Testing the modify method", "blue") returns "The note you want to modify does not exist!"', () => {
    expect(note.modifyNote('test', 'Non-existent file', 'Testing the modify method', 'blue')).to.be.equal('The note you want to modify does not exist!');
  });

  it('note.showNotes("test") returns "Test note 2 Test note "', () => {
    expect(note.showNotes('test')).to.be.equal('Test note 2 Test note ');
  });

  it('note.showNotes("Non-existent user") returns "You have never saved a note"', () => {
    expect(note.showNotes('Non-existent user')).to.be.equal('You have never saved a note');
  });

  it('note.readNote("test", "Test note") returns "Test note Testing the modify method"', () => {
    expect(note.readNote('test', 'Test note')).to.be.equal('Test note\nTesting the modify method');
  });

  it('note.readNote("test", "Non-existent file") returns "Note not found"', () => {
    expect(note.readNote('test', 'Non-existent file')).to.be.equal('Note not found');
  });

  it('note.removeNote("test", "Test note") returns "Note removed!"', () => {
    expect(note.removeNote('test', 'Test note')).to.be.equal('Note removed!');
  });

  it('The note has been deleted successfully', () => {
    expect(note.removeNote('test', 'Test note')).to.be.equal('Note not found');
    fs.rmdirSync('./notes', {recursive: true});
  });
});
