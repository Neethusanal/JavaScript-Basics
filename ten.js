function fizzBuzz()
{
    for(i=1;i<=10;i++){
        if(i%3==0)
        {
            console.log("FIZZ")
        }
        else if(i%5==0)
        {
            console.log("BUzz")
        }
        elseif(i%3==0 && i%5==0)
        {
            console.log("FizzBuzz")
        }
    }
}