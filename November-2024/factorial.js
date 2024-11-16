const num = 1;

const factorial = (num) => {
    num= Math.abs(num);
    let ans = 1;
    for (let i = num; i > 0; i--) {
        ans *= i;
    }
    return ans;
}

console.log(factorial(num));