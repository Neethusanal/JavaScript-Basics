function isValid(str) {
    
    let firstStr = Number(str[0] + str[1])
    console.log(firstStr)
    let i = 2;
    while (i < str.length) {
        let currentElement = Number(str[i] + str[i+1]);
        if (firstStr + 1 === currentElement) {
            i += 2;
            firstStr = currentElement;
        } else {
            return false
        }
    }
    return true;
}
console.log(isValid('555657585960'));


