function testingNoteList() {
  var newNoteList = new NoteList();
  newNoteList.addNote("hello");
  newNoteList.addNote("bye");
  assert.isTrue(newNoteList._noteList[0]._note === "hello");
};


testingNoteList();




