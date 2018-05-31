(function(){
  function testviewNoteList(){
    var noteList = new NoteList();
    var viewNoteList = new ViewNoteList(noteList);
    assert.isTrue(viewNoteList.stringHTML() === "");
  }
  testviewNoteList();
})();

(function(){
  function testviewNoteListOne(){
    var noteList = new NoteList();
    var viewNoteList = new ViewNoteList(noteList);
    noteList.createNote("Coffee")
    assert.isTrue(viewNoteList.stringHTML() === "<ul><li><div>Coffee</div></li></ul>");
  }
  testviewNoteListOne();
})();

(function(){
  function testviewNoteListTwo(){
    var noteList = new NoteList();
    var viewNoteList = new ViewNoteList(noteList);
    noteList.createNote("Coffee")
    noteList.createNote("Milk")
    assert.isTrue(viewNoteList.stringHTML() === "<ul><li><div>Coffee</div></li><li><div>Milk</div></li></ul>");
  }

  testviewNoteListTwo();
})();
