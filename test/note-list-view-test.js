(function(){
  function testviewNoteList(){
    var noteList = new NoteList();
    assert.isTrue(viewNoteList(noteList) === "<ul></ul>");
  }

  testviewNoteList();
})();

(function(){
  function testviewNoteList(){
    var noteList = new NoteList([new Note("Coffee")]);
    assert.isTrue(viewNoteList(noteList) === "<ul><li><div>Coffee</div></li></ul>");
  }

  testviewNoteList();
})();
