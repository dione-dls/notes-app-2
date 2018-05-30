function testNoteDefaultText(){
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.text === "My favourite language is Javascript");
};

  testNoteDefaultText();


function testshowText(){
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};

  testshowText();
