(function(exports) {
  function NoteList() {
    this._noteList = [];
  }
  
  NoteList.prototype.getList = function() {
    return this._noteList;
  }
  
  NoteList.prototype.addNote = function(note) {
     this._noteList.push(note);
  }

  exports.NoteList = NoteList; 
})(this)
