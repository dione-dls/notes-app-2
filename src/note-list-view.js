(function(exports) {

function ViewNoteList(noteList) {
  this.noteListView = noteList;
}

ViewNoteList.prototype.stringHTML = function() {
  var notes = this.noteListView.getNotes();
  if (notes.length !== 0) {

  return "<ul>"  + notes.map(function(note){
      return "<li><div>"  + note.text + "</div></li>"
    }).join("") + "</ul>"
  } else {
    return "";
  }
};
exports.ViewNoteList = ViewNoteList;
})(this);
