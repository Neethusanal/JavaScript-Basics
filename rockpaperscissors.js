function rps(p1,p2)
{
    if(p1==p2)
    {
        console.log("Draw")

    }
    if(p1=="Rock" && p2=="scissors")
    {
        console.log("player1 wons")
    }
    if(p1=="Rock"&& p2=="Paper")
    {
        console.log("player 2 wins")
    }
    if(p1=="Paper"&&p2=="scissors")
    {
        console.log("player 2 wins")

    }
    if(p1="scissors" && p2=="Paper")
    {
        console.log("Player 1 wins")
    }

}
rps(rock,scissors)