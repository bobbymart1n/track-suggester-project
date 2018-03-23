$(document).ready(function() {
    $("#formOne").submit(function(event) {
        var questionOne = parseInt($("#qOne").val());
        var questionTwo = parseInt($("#qTwo").val());
        var questionThree = parseInt($("#qThree").val());
        var questionFour = parseInt($("#qFour").val());
        var questionFive = parseInt($("#qFive").val());
        var result = questionOne + questionTwo + questionThree + questionFour + questionFive;
        if(result <= 4) {
          $("#frontEnd").show();
        } else if(result >= 7) {

        } else if(result > 8) {

        } else {

        }
        event.preventDefault();
    });
});
