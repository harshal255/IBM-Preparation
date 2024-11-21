const str = "Helloo World";

const countVowel = (str) => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return str.split("").reduce((acc, el) => vowel.includes(el.toLowerCase()) ? acc+1 : acc, 0);
}

console.log(countVowel(str));