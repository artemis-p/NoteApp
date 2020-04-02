function testingNoteList() {
  var newNoteList = new NoteList();
  newNoteList.addNote(new Note("hello"));
  newNoteList.addNote(new Note("bye"));
  assert.isTrue(newNoteList._noteList[0]._note === "hello");
};


testingNoteList();




