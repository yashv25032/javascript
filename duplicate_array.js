const arr = [1,2,3,34,4,5,2,3];
const res = arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(res);

const array = [new Set([1,2,3,4,4,5,6,6])]
console.log(typeof(array) )
