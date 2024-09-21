let num = 654;
let binaryNum = "";

while (num > 0) {
    binaryNum += (num % 2).toString();
    num= parseInt(num/2);
}

console.log(binaryNum.split("").reverse().join(""))
