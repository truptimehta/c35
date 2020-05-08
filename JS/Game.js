class Game
{
    constructor()
{

}

getGameState()
{

    var gamestateRef= database.ref('gameState')
    gamestateRef.on("value",function(data){
        gameState= data.val();
    })
}

updateGameState()
{
        database.ref('/').set({gameState:state})
}

startGame ()
{
    if(gameState===0)
    {
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}


}