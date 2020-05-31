var isPalindrome = function(x) {
    x = x.toString();
    let arrayx = x.split('');
    const length = arrayx.length/2
    for(let i=0; i<length; i++) {
            if(arrayx[i] !== arrayx[arrayx.length-i-1]) {
                return false;
            }
    }
    return true;

};

console.log(isPalindrome(121))
