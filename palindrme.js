// let str = 'Madam';
// let res_str = str.split('').reverse().join('');

// if(res_str === str){
//     console.log('its palin') ;
// }else{
//     console.log('not palin') ;
// }
// console.log(res_str);


// Case 2:

let s = 'ada';
let l = 0;
let r = s.length - 1;
let res = true;

while (l<r){
    if(s[l] !== s[r]){
        res = false ;
    }
    l++;
    r--;  
  
}

console.log(res);