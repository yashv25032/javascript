const grade = (Python , Java , Javascript ,Php) =>{
    let add = parseFloat(Python) + parseFloat(Java) + parseFloat(Javascript) + parseFloat(Php) ;
    let percent = (add / 400) * 100;

    if(percent <= 100 && percent >= 80){
        return 'A grade';
    }else if(percent<=80 && percent >=60){
        return 'B grade';
    }else if(percent<=60 && percent >=35){
        return 'C grade';
    }else{
        return 'Failure'; 
    }
    
}

r = grade(67,55,49,40);
console.log(r)

