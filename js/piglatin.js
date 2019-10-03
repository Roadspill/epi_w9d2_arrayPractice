$(document).ready(function() {
  $("form#piglatinTranslator").submit(function(event){
    event.preventDefault();
    // Input Variables
    var sentence = $('input#wordsLatin').val();
    sentence = sentence.toLowerCase();
    // console.log(sentence); // Error Checking

    var sentenceArray = sentence.split(" ");
    // console.log(sentenceArray); // Error Checking


    // Letter Variables
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var consonants;

    // Backend Variables

    for (var index = 0; index < sentenceArray.length; index += 1) {
      var word = sentenceArray[index];
  }
  


    });
    $('#results').append(checking);

    console.log(checking)

    // sentenceArray[index] = word.concat("HELLO"); // Error Checking
    console.log(sentenceArray)

    // Display Results
    // var results = sentenceArray.join(" ");
    // $('#results p').text(results);
  });
});
