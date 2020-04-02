(function(exports) {
  function NoteList() {
    this._noteList = [];
  }
  
  NoteList.prototype.getList = function() {
    return this._noteList;
  }
  
  NoteList.prototype.addNote = function(text) {
     this._noteList.push(new Note(text));
  }

  exports.NoteList = NoteList; 
})(this)
