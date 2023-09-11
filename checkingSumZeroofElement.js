let a = [-5, -4, -3, -2, 0, 2, 2, 4, 6, 8]
// output ->[-4,4]

//time complexity = o(n^2)
const getSumPairZero = (arr) => {
    for (let i of arr) {
        for (let j = 1; j < a.length; j++) {
            if (i + a[j] == 0) {
                console.log(`[${i},${arr[j]}]`)
                return true;
            }
        }
    }
}

console.log(getSumPairZero(a));