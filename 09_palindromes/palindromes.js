const palindromes = function (string) {
    if (!string) return false;
    string = string.replace(/[^\w]/g, "")
    const reversed = string.split("").reverse().join("");
    return string.toLowerCase() === reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
