$(document).ready(function(){
  $("form#wordPlay").submit(function(event) {
    event.preventDefault();
    const array = $("input#sentence").val();
    const sentence = $("input#sentence").val();
    let sentenceArray = sentence.split(" ");
    let newArray = []
    sentenceArray.forEach(function(word) {
      if (word.length >= 2) {
        newArray.push(word);
      }
      return newArray;
    })
    $("#userSentence").append(newArray.join(" "));
    $("#userSentence").append("<br>");
    $("#userSentence").append("<strong>Reverse Echo:</strong>");
    $("#userSentence").append("<br>");
    $("#userSentence").append(newArray.reverse().join(" "));
  });
});