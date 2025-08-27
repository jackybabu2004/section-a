//for loop eg
for (let i = 0; i < 10; i++
) {
    console.log('i');
}

//while loop eg( note:- where condition is given )
let a = 20;
while (a < 20) {
    console.log(a);
    a++;
}

//do-while 
let b = 20;
do {
    console.log(b);
    b++;
} while (b > 30);

//Wap to print all no. divisible by 7in range of 32 to 160
for (let i = 30; i <= 160; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}
//WAP to check prime prime no.
let num = 7;
let prime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}
if (prime) console.log('prime');

// wAp  to reverse the no.(using logic we have to muntiply to 10 )

let num1 = 4537;
let reverse = 0;
while (num1 > 0) {
    console.log(num1, reverse);
    let d = num1 % 10;
    reverse = reverse * 10 + d;
    num1 = parseInt(num1 / 10);

}
console.log(reverse);

