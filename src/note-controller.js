(function(exports) {

  function NoteController(noteList) {
      this.noteList = noteList;
      this.noteList.create("Favourite drink: seltzer");
      this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.getHTML = function() {
    var html = this.noteListView.viewNoteList(noteList);
    var element = document.getElementById('app');
    element.innerHTML = html;
  }

var noteList = new NoteList();
var noteController = new NoteController(noteList)
console.log(noteController);
console.log(this.noteList)
noteConroller.getHTML(noteList);

exports.NoteController = NoteController;
})(this);
