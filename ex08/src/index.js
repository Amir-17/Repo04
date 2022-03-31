function main() {
    // only change code below this line
    var myX;
    myX = 12;
    myX += 3;
    var myY;
    myY = 19;
    myY += 17;
    var myZ;
    myZ = 24;
    myZ -= 20;
    // only change code above this line
    return {
        myX,
        myY,
        myZ
    };
}
console.log(main());
module.exports = main;