/* 0: screen1(logo)
   1: screen2(choose 2/3/4 player game)
   2: screen3(form)
   3: screen4(play -  Game Begins)
    4: gameStates (end)
  
    */


var twoplayergame;
var threeplayergame;
var fourplayergaame;
var backgroundImage;
var canvas;
var playerCount;
var gameState =0; // 0: screen1
var form, game, player;
var car1, car2, car3, car4;
var screen1;
var gameChoice;
var playButton;
var input;
var submitButton;
function preload()
{
  //backgroundImage = loadImage("track.png");
 titleImage = loadImage("logo1.png");
}
function setup()
{
canvas = createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    //game = new Game();
    //game.getState();
    //game.start();

screen1 = createSprite(width/2,height/2,width,height);
screen1.shapeColor = "brown";


  }


function draw() {
  console.log("GameState"+ gameState);
 
 /* if (playerCount === 2) {
    game.update(1); //play
  }*/
  if(gameState == 0)
  {
    image(titleImage, width/2-100, height/2-100);

   if(mousePressedOver(screen1))
   {
     gameState=1; //screen2
     //image(titleImage, width/2-100, height/2-100);
     
   }
  
  
  }
  
  else if(gameState == 1)
  {
    screen2 =  createSprite(width/2,height/2,width,height);
    screen2.shapeColor = "pink";
    
   //if(mousePressedOver(screen2))
    // { 
    //gameState = 2;

    playButton = createSprite(width/2-400, height / 2 - 100, 100,100);
    playButton.shapeColor = "orange";
    
    submitButton  = createSprite(width /2+ 200, height / 2 ,100,100);
    submitButton.shapeColor = "blue";

    /*playButton = createButton("Play");
    playButton.position(width / 2 -400, height / 2 - 100);
    playButton.class("customButton");
    playButton.mouseClicked(changingGameState2);
    keyButton = createButton("Enter a key");
    keyButton.position(width/2+210,height/2-100);
    keyButton.class("customButton");
    keyButton.mouseClicked(changingGameState2);*/
    input = createInput("").attribute("placeholder", "123456");
    input.position(width /2+ 200, height / 2 -20);
    input.class("customInput");
     if(mousePressedOver(playButton))
    {
      gameState =2;
      
    }
   if (mousePressedOver(submitButton))
    {
     gameState=2;
   }
  //}
}
  else if(gameState == 2)
  {
    screen2.visible = false;
    background("white");
    playButton.remove();
    submitButton.remove();
    input.hide();
    twoplayergame = createSprite(width/2-200, height/2, 100,100);
    twoplayergame.shapeColor = "yellow";
    threeplayergame = createSprite(width/2, height/2, 100,100);
    threeplayergame.shapeColor= "green";
   fourplayergame = createSprite(width/2+200, height/2, 100,100);
   fourplayergame.shapeColor = "blue";
   if(mousePressedOver(twoplayergame))
   {
     gameChoice = 2;
     gameState = 3;
   }
   if(mousePressedOver(threeplayergame))
   {
     gameChoice = 3;
    gameState =3;
   }
   if(mousePressedOver(fourplayergame))
   {
     gameChoice = 4;
    gameState =3;
   }
  }
  
    else if(gameState == 3)
  {
    gameState = 4;
    screen1.visible = false;
    screen2.visible = false;
    twoplayergame.destroy();
    threeplayergame.destroy();
    fourplayergame.destroy();
    game = new Game();
    game.getState();
    game.start();
  }
  

  
  /*else if(gameState == 1)
  {
    twoplayergame = createSprite(width/2-200, height/2, 100,100);
    twoplayergame.shapeColor = "yellow";
   threeplayergame = createSprite(width/2, height/2, 100,100);
   fourplayergame = createSprite(width/2+200, height/2, 100,100);

   if(mousePressedOver(twoplayergame))
   {

     gameChoice = 2;
    gameState =2;
    

   }
   if(mousePressedOver(threeplayergame))
   {
     gameChoice = 3;
    gameState =2;
   }
   if(mousePressedOver(fourplayergame))
   {
     gameChoice = 4;
    gameState =2;
   }
  }
  else if(gameState === 2)
  {

    screen1.visible = false;
    twoplayergame.destroy();
    threeplayergame.destroy();
    fourplayergame.destroy();
    game = new Game();
    game.getState();
    
    game.start();
  }*///



  /*if (gameState === 1) { //screen
   // game.play();
  }

  if(gameState == 2)//screen3
  {
    game.end();
  }*/
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function changingGameState2()
{
  gameState =2;
}
/*
screen3 = start game or enter a game
if start game is selected, different form
if start game is selected, random number should be generated
if the other player chooses enter a game
form should be displayed to accept the rando number
screen1 = logo
screen2 start or enter
screen 3, choice of the game
screen 4, form to enter name
screen4, choice for that particular player
screen 5, welcome message ad random key

screen3 = start game or enter a game
if start game is selected, different form
if start game is selected, random number should be generated
if the other player chooses enter a game
form should be displayed to accept the random number
screen1 = logo
screen2 start or enter
screen 3, choice of the game
screen 3, form to enter name
screen4, choice for that particular player
screen 5, welcome message and random key
screen1 = logo
screen2 start or enter
they will click on enter
screen6, form to enter name and random key(sent by the friend)
if random number is matching, welcome message
when all the players have joined the game, begin the game*/