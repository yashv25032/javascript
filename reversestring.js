let str = 'hello world';
let len = str.length;
let rev = [];

for(i=len;i>=0;i--){
    
    rev.push(str[i]) 
    
}
let res = rev.join('');
console.log(res)