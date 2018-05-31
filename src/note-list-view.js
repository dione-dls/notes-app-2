(function(exports) {

function ViewNoteList(noteList) {
  this.noteListView = noteList;
}

ViewNoteList.prototype.stringHTML = function() {
  debugger;
  console.log(noteListView)
  if (this.noteListView.length !== 0) {

  return "<ul>"  + noteListView.map(function(note){
      return "<li><div>"  + note.text + "</div></li>"
    }).join("") + "</ul>"
  } else {
    return "";
  }
};
exports.ViewNoteList = ViewNoteList;
})(this);
