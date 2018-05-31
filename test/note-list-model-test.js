  function testNoteListDefaultIsEmpty(){
    var noteList = new NoteList();
    assert.isTrue(noteList.list.length === 0);
  };
    testNoteListDefaultIsEmpty();

  function testaddNote(){
    var note = new Note('Coffee');
    var note2 = new Note('Milk');
    var noteList = new NoteList();
    noteList.addNote(note)
    noteList.addNote(note2)
    assert.areArraysEqual(noteList.list, ['Coffee', 'Milk']);
  };
    testaddNote();

  function testcreateNote(){
    var noteList = new NoteList();
    noteList.createNote("Cream")
    assert.isTrue(noteList.list[0].text == "Cream");
  };
    testcreateNote();

  function testGetNotes() {
    var noteList = new NoteList();
    var note = new Note("Cream")
    noteList.addNote(note)
    assert.isTrue(noteList.getNotes()[0].text === "Cream")
  };

  testGetNotes();
