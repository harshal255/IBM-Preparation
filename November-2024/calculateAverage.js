const arr = [5, 10, 2, 8];

const calculateAverage = (arr) => {
    return arr.reduce((acc, el) => acc + el, 0) / arr.length;

}
console.log(calculateAverage(arr));