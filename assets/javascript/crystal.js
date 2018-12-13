
//PsuedoCode Here
//  

var random_result;
var lost=0;
var win=0;
var counter = 0;

//Need to have the random result always start between 19 -120
var startGame = function() {
    random_result = Math.floor(Math.random()* 101) + 19;
    

    $(".crystals").empty();

    console.log("Random Total: " + random_result);
    
    $("#result").html('Random Result: ' + random_result);
    for (var i = 0; i < 4; i++){
    
        var random = Math.floor(Math.random() * 11) + 1;
        console.log("Crystal value: " + random);
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random" : random
            });
    
            crystal.html(random);
    
        $(".crystals").append(crystal);
    
        
    }
    
}

startGame();



$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr('data-random'));

    counter+=num;
    
    if(counter > random_result){
        lost++;
        $("#lose").html(lost);
        startGame();
        counter = 0;

    }
    else if (counter === random_result){
        win++;
        $("#win").html(win);
        startGame();
        
        counter = 0;

    }
       
    console.log(counter);

});