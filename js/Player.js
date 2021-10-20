class Player{
constructor(){

this.name = null;
this.index = null;
this.key = null;
this.choice = null;// 2,3,4
}
generateRandomKey()
{
    r = 5;
}


update()
{
    database.ref("/"+r).update({
        playerCount: this.index
    });
    
    database.ref("/"+r+"/player"+this.index).update({
        name: this.name
        
    });
}

}




/*5 {
    playerCount:1;
    player1 : {
        name: A
    }  
    }*/

    
