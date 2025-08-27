const nums = [4, 6, 8, 9, 3, 1, 2];

// using index
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

console.log('using for of loop');

// using for of loop
for(let n of nums){
    console.log(n);
}


// print square of all elements in the array
// print only even numbers

for(let n of nums){
    console.log(n**2);
}

console.log('odd numbers');
for(let n of nums){
    if(n%2!==0){
        console.log(n);
    }
}
nums.forEach((n,i,a,) =>{console.log(n,i,a);})
//nums.forEach((n,i,a,b) =>{console.log(n,i,a,b);}) undefined


const prices =[3000, 4500,6000,1200,2300]
//WAP to  print all prces less then 4000
prices.forEach((p) =>{ if (p<4000){console.log(p);}
});