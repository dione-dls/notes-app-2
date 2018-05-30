(function(exports) {
  function testNoteDefaultText(){
    var note = new Note("My favourite language is Javascript");
    if (note.text !== "My favourite language is Javascript") {
      throw new Error("Note doesn't have a default text")
    }
  };

  testNoteDefaultText();
})(this);

(function(exports) {
  function testShowText(){
    var note = new Note("Hello");
    if (note.showText() !== "Hello") {
      throw new Error("Note doesn't have a text property")
    }
  };

  testShowText();
})(this);
