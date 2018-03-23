$(document).ready(function() {
    $("#formOne").submit(function(event) {
        var questionOne = parseInt($("#qOne").val());
        var questionTwo = parseInt($("#qTwo").val());
        var questionThree = parseInt($("#qThree").val());
        var questionFour = parseInt($("#qFour").val());
        var questionFive = parseInt($("#qFive").val());
        var result = questionOne + questionTwo + questionThree + questionFour + questionFive;
        console.log(result);
        if(result ) {

        }
        event.preventDefault();
    });
});
