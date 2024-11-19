const digits = 1234;
const sumOfDigits = (digit) => {
    return digit.toString().split("").reduce((el, acc) => parseInt(el) + parseInt(acc), 0);
}

console.log(sumOfDigits(digits));