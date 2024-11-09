//Longest Word in String

const string = "Watch Thapa Technical javascript course on youtube awesomethapatechnical";

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    } else {
        // const obj = {};
        // str.split(" ").sort().map((el) => {
        //     obj[el] = el.length;
        // })
        // console.log(obj);
        // const maxLength = Math.max(...Object.values(obj));
        // return Object.keys(obj).find((el) => el.length === maxLength);
        //we can use filter here too if want to all longest word in string but in the question we have to find 1st longest word

        // return str.split(" ").sort((a, b) => b.length - a.length)[0];

        return str.split(" ").reduce((acc, curWord) => {
            return curWord.length > acc.length ? curWord : acc;
        },"")
    }
};

console.log(findLongestWord(string));