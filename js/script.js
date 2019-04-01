$(document).ready(function(){
    $("#submit").click(function(event){
        $("#QUIZ").hide();
        $("#result").show();
        $("#Score").show();
        event.preventDefault();




        var score = 0;
        var questOne = parseInt($("input:radio[name=q1]:checked").val());
        var questTwo = parseInt($("input:radio[name=q2]:checked").val());
        var questThree = parseInt($("input:radio[name=q3]:checked").val());
        var questFour = parseInt($("input:radio[name=q4]:checked").val());
        var questFive = parseInt($("input:radio[name=q5]:checked").val());


        var result =(questOne + questTwo + questThree + questFour + questFive);

        var percentage =(result/100)*100;

        if(percentage >= 70 ){
  document.getElementById("result").innerHTML="You got " + percentage + "%";
  document.getElementById("score").innerHTML="Excellently passed.<br> Great Job!"

}
else if(percentage >= 50){
  document.getElementById("result").innerHTML="You got " + percentage + "%";
  document.getElementById("score").innerHTML="Very Good.fairly passed <br> keep it up!."

}
else{
  document.getElementById("result").innerHTML="You got " + percentage + "%";
  document.getElementById("score").innerHTML="poorly performed.you need to retake the quiz please. ."

}

    })
})
$(document).ready(function(){
    $(".clickable").click(function(){
        $(".moti-showing").toggle();
        $(".moti-hidden").toggle();
    });
});
