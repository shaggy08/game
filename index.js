

let sequence=[];
let pattren=["green","red","yellow","blue"];
let userclick=[];

let  chek=true;

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function(event){
    let key=event.target.id;
    userclick.push(key);
    console.log(userclick);
    //console.log(key);
    animation(key);
     
    playsound(key);
    console.log("im call");
    chekans(userclick.length-1);
    console.log("mujhe balya");
   // alert("incliked");
})


function showpattern(){
    for(let i=0;i<sequence.length;i++){
        $("#"+sequence[i]).fadeIn(400).fadeOut(400).fadeIn(400)
        // delay(i);
        console.log(sequence[i]);
        
       
    }
    

}
function delay(key){
    setTimeout( ()=>{
        animation(sequence[key]);
        
    },2000);
}

function numGenerate(){
    let num=Math.floor(Math.random()*4);
   // sequence.push(pattren[num]);
    return num;
}

function animation(key){
    $("."+key).addClass("pressed");
    setTimeout(function(){
        $("."+key).removeClass("pressed");
    },100);

}
function playsound(key){
    let sound= new Audio("sounds/"+key+".mp3");
    sound.play();
}
function chekans(i){
    if(sequence[i]===userclick[i]){
        console.log("first");
        if(sequence.length===userclick.length){
            console.log("secof");
           setTimeout( function(){
            nextSequence();
        },1000); 
        }
        
    }
    else {
        let aud=new Audio("sounds/wrong.mp3");
        aud.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }

}
function startOver(){
    userclick=[];
    sequence=[];
    started=false;
    level=0;
    
}

function nextSequence(){
 userclick=[];
 level++;
 $("#level-title").text("Level " + level);

 let num=numGenerate();
 sequence.push(pattren[num]);
 let colorgen=pattren[num];
 animation(pattren[num]);
 playsound(colorgen);


}
