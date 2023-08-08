function basicoperation(operator,value1,value2)
{   let result;
    switch(operator)
    {
        case '+':
        result= value1+value2;
        break;
        case '-':
        result= value1-value2;
        break;
        case '*':
        result= value1*value2;
        break;
        case '/':
        result= value1/value2;
        break;
    } console.log(result)
}
basicoperation("+",5,8)