function testingNewNoteListView() {
  var newNoteList = new NoteList();
  var newListView = new ListView(newNoteList);
  var HTMLtext = "<ul><li><div>hello</div></li><li><div>bye</div></li></ul>";
  newNoteList.addNote(new Note("hello"));
  newNoteList.addNote(new Note("bye"));
  assert.isTrue(newListView.getHTML() === HTMLtext);
};

testingNewNoteListView();


