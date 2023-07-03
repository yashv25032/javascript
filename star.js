let n=5;
let str=''
for (i = 0; i<=n; i++) {
    for (j=0;j<=i;j++){
        str += '*';
    }

    str += '\n';
}
console.log(str)
                                                            
// console.log('Square Trianle ')
// <<<<<<<<<<>>>>>>>>>>>>>>>>
let x=5;
let s=''
for (i = 0; i<x; i++) {
    for (j=0;j<x;j++){
        s += '*';
    }

    s += '\n';
}
console.log(s)

// <<<<<<<<<<>>>>>>>>>>>>>>>>
let y = 5;
let m='';
for(i=0;i<y;i++){
    for(j=0;j<y;j++){
        if(i==0 || i==y-1){
            m += '*';
        }else{
            if(j==0 || j==y-1){
                m +='*';
            }else{
                m += ' ';
            }
        }
    }
    m += '\n';
}

console.log(m)

// <<<<<<<<<<>>>>>>>>>>>>>>>>
let z = 5;
let d ='';
for(i=0;i<z;i++){
    for(j=0;j<z-1;j++){
        d += " ";
    }

    for(k=0;k<i;k++){
        d +="*";
    }
    d += '\n';

}

console.log(d)

// <<<<<<<<<<>>>>>>>>>>>>>>>>
let p=5;
let q='';

for(i=0;i<p;i++){
    for(j=0;j<i;j++){
        q += '*';
    }
    q += '\n'
}
console.log(q);

// <<<<<<<<<<>>>>>>>>>>>>>>>>

let t=5;
let r='';

for(let i=0;i<t;i++){
    for(let j=0;j<t-i;j++){
        r += '*';
    }
    r += '\n'
}
console.log(r);

// <<<<<<<<<<>>>>>>>>>>>>>>>>


let num = 5;
let col = '';

for(i=0;i<=num;i++){
    for (j=0; j<= num -1; j++){
        col += ' '
    }

    for (k=0; k <= i ; k++){
        col +='*'
    }

    col += '\n';
}
console.log(col);
