const str = "PPPPPP@PPP@PP$PP";

const splittedArr = str.split('@').join(',').split('$').join(',');
console.log(splittedArr);
const lengthOfArr = splittedArr.split(",").map((ele, i) => {
    return ele.length;
});
// console.log(lengthOfArr);
console.log(Math.min(...lengthOfArr));
