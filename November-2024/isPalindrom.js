const str = "A man, a plan, a canal,Panama";

const isPalindrom = (str) => {
    // const regString = str.replaceAll(" ", "").replaceAll(",", "").toLowerCase();
    //we can use /\W/g for demonstrative non word.
    const regString = str.replaceAll(/\W/g, "").toLowerCase();
    const reverseString = regString.split("").reverse().join("");
    return regString === reverseString;
}

console.log(isPalindrom(str));