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
        // Hide additional survey results if survey is retaken.
        $("button.btn").click(function() {
          $(".survey-card").hide();
        });
        // Hide survey questions on form submit
        $(".survey").hide();
        // When result shows, show a close button in top right corner of result card
        $(".back-button").show();
        // On close button click, show survey again and hide results
        $(".back-button").click(function() {
          $(".survey").show();
          $(".survey-result").hide();
        });
        event.preventDefault();
    });
});
