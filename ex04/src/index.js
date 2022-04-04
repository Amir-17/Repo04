function main(){
    // only change code below this line
    var myDecimal;
    myDecimal = 8.2;
    var myDecimalE;
    myDecimalE = 2.54e-3;

    myDecimalE = myDecimalE.toPrecision();
    // only change code above this line
    return {
        myDecimal,
        myDecimalE
    };
}
console.log(main());
module.exports = main;