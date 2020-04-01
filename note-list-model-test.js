// function testNoteModelList() {
//   var newNoteList = new NoteList;
//   assert.isTrue(newNoteList._noteList.length == 0);
// };

// testNoteModelList();

// describe("NoteList", function() {
//   it("stores a note", function() {
//     var newNote1 = new Note("hello");
//     var newNote2 = new Note("bye");
//     var newNoteList = new NoteList();
//     newNoteList.addNote(newNote1);
//     newNoteList.addNote(newNote2);
//     expect(newNoteList[1]).toEqual(newNote2);
//   });
// });

function testingNoteList() {
  var newNote = new Note("hello");
  //var newNote2 = new Note("bye");
  var newNoteList = new NoteList();
  //newNoteList.addNote(newNote1);
  newNoteList.addNote(newNote);
  // console.log(newNote2)
  // console.log(newNoteList._noteList[0]);
  assert.isTrue(newNoteList._noteList[0] === newNote);
};


testingNoteList();