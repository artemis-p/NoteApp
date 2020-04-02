(function(exports) {
  function Note(string) {
  this._note = string;
  this.id = 0;
};

Note.prototype.getText = function() {
  return this._note;
}

  exports.Note = Note;
})(this)


