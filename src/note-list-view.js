(function(exports) {
  function ListView(noteList) {
    this._listView = noteList;

    ListView.prototype.getListView = function() {
      return this._listView;
    }

    ListView.prototype.getHTML = function(){
      var HTML = "<ul>" 
      console.log(this._listView._noteList);
        var notes = this._listView._noteList.values();
          for (let note of notes) {
            HTML += "<li><div>" + note._note + "</div></li>"
      }
      HTML += "</ul>";
      return HTML;

  }
} 
  exports.ListView = ListView;
})(this)
