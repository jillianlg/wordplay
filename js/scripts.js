$(document).ready(function(){
  $("form#wordPlay").submit(function(event) {
    event.preventDefault();
    const array = $("input#sentence").val();
  });
});