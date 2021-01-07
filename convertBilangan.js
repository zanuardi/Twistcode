//Binary to Decimal
function binaryToDecimal(binaryNumber) {
    var total = 0;
    for (var i = 0; i < binaryNumber.length; i++) {
        var bit = binaryNumber.charAt(binaryNumber.length - (i + 1));
        if (bit == 1) {
            var number = Math.pow(2, i * parseInt(bit));
            total += number;
        }
    }

    return total;
}

console.log(binaryToDecimal("101010"));

//Decimal to Binary
function convertDecimalToBinary(number) {
    var binary = "";

    while (number > 0) {
        if (number % 2 == 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        number = Math.floor(number / 2);
    }

    return binary;
}

console.log(convertDecimalToBinary(1111));