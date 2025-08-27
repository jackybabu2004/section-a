num = 30;

if (num % 2 == 0) {
    console.log('even');
   // msg='hello';
    let msg='hello';
    const pi =3.14;   //const  and let used for local
       
    //locacl variable can be uses in local and bracket and bock used in global 
} else {
    console.log('odd');
}
//console.log(msg)
//console.log(pi);

let marks=40;

// 100> marks>90 : A
//90> marks >70 : B
//70 > marks >40 :c
// 40 > marks >0 : F
  
if(marks <= 100 && marks>90){
console.log('Grade A');
}

else if(marks <90 && marks<=70)
{console.log('Grade B');}
else if(marks <70 && marks <=40){
    console.log('Grade C');
}
else if(marks <40 && marks <= 0){
    console.log('Grade F')
}
else{
    console.log('invalid marks');
}