const string = "MissIssippi";
const findChar = "s";


const countChar = (str, findChar) => {
    return str.split("").reduce((acc, el) => el.toLowerCase() === findChar.toLowerCase() ? acc + 1 : acc, 0);
}

console.log(countChar(string,findChar))