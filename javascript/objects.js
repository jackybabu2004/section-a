const user = {
    name: 'raju rastogi',
    email: 'raju@gmail.com',
    passowrd: 'abc123'

};
console.log(user);

console.log(user.name);
console.log(user['email']);
console.log(user['passowrd']);

user.address = 'lucknow';

console.log(user);

user.name = 'ramu';
console.log(user);

console.log('username' in user);

console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'realme',
    model: 'GT2 pro',
    price: 30000,
    colors: ['brand', 'black', 'white']

};

//access price of smartphone


console.log(smartphone['price']);


//change model of the smart phone
smartphone.model = 'mi';
console.log(smartphone);

//get the second color of smartphone

console.log(smartphone.colors[1][2]);
// console.log(smartphone.brand[1][0].slice(0,5));
//console.log(smartphone.colors[1][2]);


//add a new color to smartphone
console.log(smartphone.colors[1]);
smartphone.colors.push('pnk');

console.log(smartphone);

const smartphoneList = [
    {
        brand: 'Realme',
        model: 'GT2 Pro',
        price: 30000,
        colors: ['blue', 'black', 'white']
    },
    {
        brand: 'Apple',
        model: 'Iphone 13',
        price: 45000,
        colors: ['black', 'white']
    },
    {
        brand: 'Nothing',
        model: '3a',
        price: 25000,
        colors: ['black', 'white', 'blue']
    },
    {
        brand: 'Motorola',
        model: 'h50',
        price: 21000,
        colors: ['green', 'blue']
    },
    {
        brand: 'IQOO',
        model: 'Z2',
        price: 15000,
        colors: ['red', 'blue', 'black']
    },
];

console.log(smartphonelist.length);

console.log(smartphonelist[0]);

console.log(smartphonelist[1]);

console.log(smartphonelist[0].price);

console.log(smartphonelist[0].colors[2]);

smartphonelist[0].colors.push('green');
console.log(smartphonelist);


