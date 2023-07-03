
let num = 152;
let rev =0;
let n = num

while(n > 0){

    let remain = n % 10
    rev += remain ** 3
    n = parseInt(n / 10)
    
}

if (rev === num){

    console.log('anagram')

}else{

    console.log('not anagram')
    
}

