 let n=5;
 let str =" ";

for(i=0; i<=n ; i++){

    for(j=1; j<n-1; j++){
        str += " ";
    }

    for(k=0; k<2* i -1 ; k++){
        str += "*";
    }

    str += "\n";

}
console.log(str);

// let num=5 ;
// let string ="";

// for(i=0; i<=num; i++){

//     for(j=0; j<i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);




