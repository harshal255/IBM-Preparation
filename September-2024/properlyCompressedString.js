const str = "a3b2c5a1g9c2";
//correct ans = "a4b2c7g9"

let obj = {};
Array.from(str).map((ele, i) => {
    //even -> string
    //odd -> number
    if ((i % 2) === 0) {
        obj[ele] = (obj[ele] || 0) + parseInt(str[i + 1]);
        console.log(parseInt(str[i + 1]));
    }
});
console.log(obj);
let ans = "";
Object.keys(obj).map((ele) => {
    return ans += (ele + obj[ele]);
})
console.log(ans);