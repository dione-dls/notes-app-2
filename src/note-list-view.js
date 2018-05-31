(function(exports) {

exports.viewNoteList = function(noteList) {

  if (noteList.list.length !== 0) {

  return "<ul>"  + noteList.list.map(function(note){
      return "<li><div>"  + note.text + "</div></li>"
    }).join("") + "</ul>"
  }else {
    return "";
    }
  };

})(this);
