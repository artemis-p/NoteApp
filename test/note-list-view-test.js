function testingNewNoteListView() {
  var newNoteList = new NoteList();
  var newListView = new ListView(newNoteList);
  var HTMLtext = "<ul><li><div>hello</div></li><li><div>bye</div></li></ul>";
  newNoteList.addNote("hello");
  newNoteList.addNote("bye");
  assert.isTrue(newListView.getHTML() === HTMLtext);
};

testingNewNoteListView();


