var canvas, backgroundImg;
var gameState=0;
var playerCount;
var database;
var form,player,game



function setup()
{
        var canvas= createCanvas(400,400)
        database=firebase.database();
        game=new Game();
        game.getGameState();
        game.startGame();

}       

function draw(){


}