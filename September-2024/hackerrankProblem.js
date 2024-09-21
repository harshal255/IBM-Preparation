function processData(input) {
    //Enter your code here
    [...input.split("\n")].map((ele, i) => {
        //we have to trim all element
        ele.trim();
        //remove first element for data length
        if (i) {
            // console.log(ele.trim().split(""));
            const x = ele.trim().split("");
            let ans = x.map((ele) => {
                return ele.charCodeAt(0)
            })
            console.log(ans.join(" "));
        }
    })
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
