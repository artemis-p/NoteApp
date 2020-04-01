function Note(string) {
  this._note = string;
};

Note.prototype.noteReturn = function() {
  return this._note;
};


