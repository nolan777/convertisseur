
var arabic = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
roman = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
arabicLength = arabic.length;

// nombre romain to nombre arabe

function romanToArabic(chiffreR){
    if ( ( typeof chiffreR != "string" ) || ( chiffreR.length < 1 ) ) return;

    var x = 0,
    item = "";

    for ( var i = 0; i < arabicLength; ++i ){

        while ( chiffreR.length >= roman[i].length ){
            item = chiffreR.slice( 0, roman[i].length );

            if ( roman[i] === item ){
                x += arabic[i];
                chiffreR = chiffreR.substring( roman[i].length );
            } else {
                break;
            }
        }
    }
    return x;
}

module.exports = romanToArabic;