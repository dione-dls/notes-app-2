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
    console.log(noteList.list)
    assert.areArraysEqual(noteList.list, ['Coffee', 'Milk']);
  };
    testaddNote();

  function testcreateNote(){
    // debugger;
    var noteList = new NoteList();
    console.log(noteList);
    noteList.createNote("Cream")
    console.log(noteList.list[0].text);
    assert.isTrue(noteList.list[0].text == "Cream");
  };
    testcreateNote();
