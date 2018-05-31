(function(){
  function testviewNoteList(){
    var noteList = new NoteList();
    assert.isTrue(viewNoteList(noteList) === "");
  }

  testviewNoteList();
})();

(function(){
  function testviewNoteListOne(){
    var noteList = new NoteList();
    noteList.createNote("Coffee")
    assert.isTrue(viewNoteList(noteList) === "<ul><li><div>Coffee</div></li></ul>");
  }

  testviewNoteListOne();
})();

(function(){
  function testviewNoteListTwo(){
    var noteList = new NoteList();
    noteList.createNote("Coffee")
    noteList.createNote("Milk")
    assert.isTrue(viewNoteList(noteList) === "<ul><li><div>Coffee</div></li><li><div>Milk</div></li></ul>");
  }

  testviewNoteListTwo();
})();
