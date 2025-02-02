//              III   III ////\\\\ III,    ,III IIIIIIII |I|    |I| ////\\\\ III''\\\  III  |||
//              III...III III  III III,\,,/,III III,,,,, |I| ,, |I| III  III III,,III  III,,///
//              III"""III III  III III \||/ III III""""" \II/II\II/ III  III III""\\\  III""\\\
//              III   III \\\\//// III      III IIIIIIII  \II/\II/  \\\\//// III   \\\ III  |||
//
// task 2 ——— count characters

var string = "Hello my friends! How are you? I'm fine, thx";
var storage = {};

function countChars(string) {
    var char;
    for (
    var index = 0;
    index < string.length;
    index++) {
        char = string[index];
        if (char === " ") {
        char = "space";
        }
        else {char = char.toLowerCase()};
        console.log("index = ", index, "char=", char)
        if (storage[char] !== undefined && storage[char] > 0) {
            storage[char] = storage[char] + 1
        }
        else {
            storage[char] = 1
        }
    }
};

countChars(string);
console.log(storage)