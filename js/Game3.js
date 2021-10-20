class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
      this.blast = false;
      this.leadeboardTitle = createElement("h2");
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;
    }

getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  start()
  {
   form = new Form();
  form.display();
 // image(backgroundImage,0,0, width, height);

  /*car1 = createSprite(width / 2 - 50, height/2, 20,20);
  car1.shapeColor = "pink";

  car2 = createSprite(width / 2 + 100, height/2,20,20);
  car2.shapeColor = "red";*/

drawSprites();
  }

}