const string = "my name is harshal kahar";


const capitalize = (s) => {
    // return String(s[0]).toUpperCase() + String(s).slice(1);
    //replace method can replace first matches instance, replaceAll method can replace all matches instance
    return s.replace(s[0],s[0].toUpperCase());
}

const hashTagGen = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    // return "#" + str.split(" ").map((el) => capitalize(el)).join("");
    return str.split(" ").reduce((acc, el) => acc + capitalize(el), '#');
}

console.log(hashTagGen(string));