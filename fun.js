var Sum = function(num1, num2) {
    return num1 + num2;
}

console.log(Sum(2, 3));



var Max = function (num1, num2, num3) {
    var biggest = 0;
    var numArray = [num1, num2, num3];

    for ( var i = 0; i < numArray.length; i++) {
        if (numArray[i] > biggest) {
            biggest = numArray[i]
        }
    }
    console.log("The largest number is " + biggest)
}

Max(9, 11, 13);

var EvenOdd = function(num) {
    if (num %2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
        }
    }

EvenOdd(4567);