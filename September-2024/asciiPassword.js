let s = "796115110113721110141108";
const reverse = s.split("").reverse().join("");
console.log(reverse);
let answer = "";
for (let i = 0; i < reverse.length; i += 2) {
    if (i < reverse.length - 1) {
        let x = parseInt(reverse[i] + reverse[i + 1]);
        if (x === 32) {
            answer += "";
        }
        //here max value is 99 because x is 2 digit only
        else if ((x >= 65 && x <= 90) || (x >= 97 && x <= 99)) {
            // console.log(x);
            answer += (String.fromCharCode(x));
        }
        //value is greater than 100
        else if (i + 2 < reverse.length) {
            x = x + reverse[i + 2];
            // console.log(x);
            answer += (String.fromCharCode(x));
            i += 1;
        }
    }
}

console.log(answer);


