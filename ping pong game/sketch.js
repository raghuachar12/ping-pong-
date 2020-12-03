
var gamestate;
var ball,player,ai;
var ai_score,player_score;

function setup() {
  // window get crerate 
  createCanvas(400,400);
  ball=createSprite(200,200,15,15);
  player=createSprite(380,200,15,80);
  ai=createSprite(20,200,15,80);
  edges= createEdgeSprites();
  ai_score=0;
  player_score=0;
  gamestate='ready';
}
 // task get start 
function draw() {
  textSize(18);
  stroke('black');
  background(0,0,255);  
  player.y=mouseY;
  ai.y=ball.y;
  ball.bounceOff(player);
  ball.bounceOff(ai);
// top and bottom bound 
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);

  if(gamestate=='ready'){

    text(" press space to start ",100,100);
  }
// start 
  if (keyDown('space')&& gamestate=='ready') {
  
    ball.velocityX=-3;
    ball.velocityY=3;
    gamestate='play';
  }
 // condition 
  if(ball.x<0 || ball.x>400){
    gamestate='ready';

    if(ball.x<0){
      player_score++;
    }
    if(ball.x>400){
      ai_score++;
    }
    ball.x=200;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
  }

  if(player_score || ai_score == 3){
   
    if(player_score==3){
      text("you won!!")
    }

    else {
      text("YOU LOOOSE!!!!!");
    }


   gamestate='gameover';
   
   text("game_over !!!",150,150);
   text("press 'R' to restart the game ",100,250);
}

if(keyDown('R')&& gamestate=='gameover'){
  gamestate='ready';
  player_score=0;
  ai_score=0;
}

 // line(200,0,200,400);
  for(i=0;i<400;i=i+20){
    strokeWeight(2);
    stroke('white');
    line(200,i,200,i+10);
  }

  // score 
    text(ai_score,150,20);
    text(player_score,250,20);
    drawSprites();
}