module.exports = function reverse (n) {
    let reverseIntArray = [];
    if (n > 0) {
        for (let i = 0; i < String(n).length; i++){
            reverseIntArray.unshift(String(n)[i]);
    }
        return(Number(reverseIntArray.join("")));
    } else {
        for (let i = 1; i < String(n).length; i++){
            reverseIntArray.unshift(String(n)[i]);
    }
        return(Number(reverseIntArray.join("")));
    }
}
