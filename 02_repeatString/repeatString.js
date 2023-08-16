const repeatString = function(word,times) {
    let words ="";

    
    //if input times is less than 0
    if(times < 0 ){
        return "ERROR";
    }

    for(let i=1;i<=times;i++){
        words += word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
