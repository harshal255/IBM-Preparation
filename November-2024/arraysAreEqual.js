const arr1 = [1,2,3];
const arr2 = [1,2,3];

const checkArrAreEqual = (arr1, arr2) => {
    const result = arr1.filter((el, i) => el === arr2[i]);
    console.log(result);
    return arr1.length === arr2.length && arr2.length === result.length;
}

console.log(checkArrAreEqual(arr1, arr2));