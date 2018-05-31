var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }else {
      console.log("Test passed")
    }
  },

  areArraysEqual: function(arrayOneToCheck,arrayTwoToCheck) {

    if (arrayOneToCheck.length != arrayTwoToCheck.length) {
      throw new Error("Assertion failed: " + arrayOneToCheck + " is not equal" + arrayTwoToCheck);
    }

    for (var i = 0, l=arrayOneToCheck.length; i < l; i++) {

      if (!arrayOneToCheck[i] === arrayTwoToCheck[i]) {
          throw new Error("Assertion failed: " + arrayOneToCheck + " is not equal" + arrayTwoToCheck);
    }
    console.log("Test passed")
    }
  }
};
