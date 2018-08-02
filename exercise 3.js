function ReverseString(text) {

    var arrText = text.split(' ');

    for (var i = 0; i < arrText.length; i++) {
        if (i % 2 != 0) {
            var toRev = arrText[i]
            var revText = '';
            for (var x = toRev.length - 1; x >= 0; x--) {
                revText += toRev[x];
            }

            arrText[i] = revText;
        }
    }

    return arrText.join(' ');

}

