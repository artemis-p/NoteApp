function NoteList() {
  this._noteList = [];
};

NoteList.prototype.returnNoteList = function() {
  return this._noteList;
};

NoteList.prototype.addNote = function(note) {
   this._noteList.push(note);
}
