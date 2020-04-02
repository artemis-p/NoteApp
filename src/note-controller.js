// (function(exports) {
//   function changeText() {
//     var newText = document.getElementById('app');
//     newText.innerHTML = "howdy";
//     console.log(newText.innerHTML);
//   }
//     exports.changeText = changeText;
// })(this)

// changeText();

(function(exports) {
  function NoteControl(noteList) {
    this._noteList = noteList;
    this._listView = new ListView(this._noteList);
    console.log(this._listView);
  }
  NoteControl.prototype.changeText = function() {
    var newText = document.getElementById('app');
    newText.innerHTML = this._listView.getHTML();
  }

  exports.NoteControl = NoteControl;

})(this)

var noteList = new NoteList;
noteList.addNote("Favourite food: pesto");
noteList.addNote("Favourite dessert: cheesecake");
noteList.addNote("Favourite drink: coca cola");
var noteController = new NoteControl(noteList)
noteController.changeText();


