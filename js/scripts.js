$(document).ready(function() {
    $("#formOne").submit(function(event) {
        var questionOne = parseInt($("#qOne").val());
        var questionTwo = parseInt($("#qTwo").val());
        var questionThree = parseInt($("#qThree").val());
        var questionFour = parseInt($("#qFour").val());
        var questionFive = parseInt($("#qFive").val());
        var result = questionOne + questionTwo + questionThree + questionFour + questionFive;
        if(result === 4) {
          $("#frontEnd").show();
        } else if(result === 7) {
          $("#backEnd").show();
        } else if(result > 7) {
          $("#java").show();
        } else if(result < 0) {
          $("#maybeNot").show();
        }  else {
          $("#any").show();
        }
        console.log(result);
        $("button.btn").click(function() {
          $(".survey").detach();
        });
        event.preventDefault();
    });
});
