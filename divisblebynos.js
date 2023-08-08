function divisible(n,x,y){

    let result1=n/x;
    let result2=n/y;
    if((result1%1 && result2%1)==0)
    {
        console.log("true")
    }
    else
    {
        console.log("false")
    }
}
divisible(13,5,2);