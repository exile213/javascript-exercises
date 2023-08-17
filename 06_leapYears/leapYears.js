const leapYears = function(year) {
    
    let leapyear=true;

        if(year%4 ==0){
            return leapyear = true;
        }
        else if(year%100 ==0 && year%400 ==0){
            return leapyear = true;
        }
        else{
            return leapyear = false;
        }
};

// Do not edit below this line
module.exports = leapYears;
