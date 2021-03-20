
var arabic = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
roman = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
arabicLength = arabic.length;

// nombre arabe to nombre romain

function arabicToRoman(nombre){

    var x = parseInt( nombre, 10 ) || 1,
    string = "";

    if ( x < 1 ){
        x = 1;
    } 

    for ( var i = 0; i < arabicLength; ++i ){
        while ( x >= arabic[i] ){
            x -= arabic[i];
            string += roman[i];
        }

        if ( x == 0 ){
            break;
        }
    }

    return string;
}

module.exports = arabicToRoman;