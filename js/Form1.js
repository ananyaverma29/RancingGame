class Form1
{
    constructor()
    {
        this.title = createElement("h2");
        this.input = createInput("");
        this.button = createButton("Submit");

    }

setElementPosition()

{
    this.title.position(width/2-100, height/2-50);
    this.input.position(width/2-80,height/2);
    this.button.position(width/2-100, height/2+50);
}
setElementStyle()
{
    this.title.class("form1Title");
    this.input.class("form1Input");
    this.button.class("form1Button");
}

hide()
{
    this.title.hide();
    this.input.hide();
    this.button.hide();
}
handleMousePressed()
{
    gameState= 4;
    this.hide();
    this.button.mousePressed(()=>{
        player = new Player();
        player.generateRandomKey();
        player.index = 1
        player.update();
        
    });
   
}
display()
{
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
}}