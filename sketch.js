var screen1;
var gameState = 0;
var playButton, keyButton;
var player;
var playerCount;
function preload()
{

}
function setup()
{
    canvas = createCanvas(windowWidth,windowHeight);
    database = firebase.database();

    screen1 = createSprite(width/2,height/2,width,height);
    screen1.shapeColor = "brown";

}

function draw()
{
    console.log("game State"+gameState);
    background("black");
    if(gameState == 0)
    {
    
        if(mousePressedOver(screen1))
        {
            gameState = 1;
        }
    }
     else if(gameState == 1)
     {
         screen1.destroy();
         background("pink");
         playButton = createSprite(width/2-400, height/2,100,100);
         playButton.shapeColor = "yellow";
         keyButton = createSprite(width/2 + 400, height/2, 100,100);
         keyButton.shapeColor = "red";
         if(mousePressedOver(playButton))
         {
            gameState = 2;
         }
         else if(mousePressedOver(keyButton))
        { 
            gameState =3;


        }
     }
     
     else if( gameState == 2)
     {
        keyButton.visible = false;
        playButton.visible = false;
       
        form1 = new Form1();
        form1.display();
     }
     else if(gameState == 4)
     {
         console.log("gamestates 4");
        keyButton.destroy();
        playButton.destroy();
        keyButton.visible = false;
        playButton.visible = false;
         background("grey");
    twoplayergame = createSprite(width/2-200, height/2, 100,100);
    twoplayergame.shapeColor = "violet";
    threeplayergame = createSprite(width/2, height/2, 100,100);
    threeplayergame.shapeColor= "green";
   fourplayergame = createSprite(width/2+200, height/2, 100,100);
   fourplayergame.shapeColor = "blue";
     }

    drawSprites();

}
