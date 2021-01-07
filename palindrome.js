function isPalindrome(str1) {
    var rev = str1.split("").reverse("").join("");
    return str1 == rev;
}

function longestPalindrome(str1) {

    var maxLength = 0,
        maxPalindrome = '';

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var subStr = subs.substr(0, j);
            if (subStr.length <= 1)
                continue;

            if (isPalindrome(subStr)) {
                if (subStr.length > maxLength) {
                    maxLength = subStr.length;
                    maxPalindrome = subStr;
                }
            }
        }
    }

    return maxPalindrome;
}

console.log(longestPalindrome("akusukamakannasi"));
console.log(longestPalindrome("dirumahsayaadakasurrusak"));
console.log(longestPalindrome("abcdeedcbza"));