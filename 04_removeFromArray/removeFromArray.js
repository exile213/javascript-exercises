const removeFromArray = function(Arrays, ...Arguements) {

    for(const argue of Arguements) {
       Arrays = Arrays.filter(function(Array){
            return Array !== argue;
            }
        );
    };
    return Arrays
};

// Do not edit below this line
module.exports = removeFromArray;
