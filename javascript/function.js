function addnums(a,b){
    var c = a+b;
    console.log(c);

}
addnums(34,7);
//console.log(c);
const getavg =function(a,b,c){
    const avg =(a+b+c)/3;
    //console.log(avg);
    return avg;
};
 const result= getavg(234,37,84);
 const newresult=getavg(89,90,70);
 console.log(result);
 console.log(newresult);
 console.log(result);


 const factorial =(n)=>{
    let f = 1;
    for(let i= 1; i<= n; i++){
        f =f *i;
    }
 return f;
}
const fact =factorial(6);
console.log(fact);