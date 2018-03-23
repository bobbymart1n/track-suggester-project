$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("#name").val();
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
    // Show survey results on submit
    $(".survey-result").slideDown();
    // Insert users name at the beginning of each outcomes description.
    $(".user-name").text(name);
    // Hide survey questions on form submit
    $(".survey").slideUp();
    // When result shows, show a close button in top right corner of result card
    $(".back-button").show();
    // Hide additional survey results if survey is retaken.
    $("button.btn").click(function() {
      $(".survey-card").hide();
    });
    // On close button click, show survey again and hide results
    $(".back-button").click(function() {
      $(".survey").slideDown();
      // Reset form back to their first options/zeroeth positions and hide survey results
      $("#formOne")[0].reset();
      $(".survey-result").slideUp();
    });
    event.preventDefault();
  });
});
