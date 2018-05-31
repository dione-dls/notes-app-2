(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.addNote = function (note) {
      this.list.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    this.addNote(note);
  };

  exports.NoteList = NoteList;

})(this);
