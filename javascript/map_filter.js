const nums = [3, 5, 7, 9, 1, 2];

const sqrnums = nums.map((n) => { return n * n; });
console.log(sqrnums);

const nums5 = nums.map((n) => { return n * 5 });
console.log(nums5);

const prices = [3400, 4700, 2900, 1200, 8700, 9900];
console.log(400 * 1.18);

const gstprices = prices.map((p) => { return p * 1.18 });
console.log(gstprices);

const evennums = nums.filter((n) => { returnn % 2 === 0; });
console.log(evennums);

//wap to filter prices less then 6000
const budgetprices = prices.filter((n) => { return n < 6000 });
console.log(budgetprices);

// WAP  to convert this im captiAL
const names =['ramu','raju','pinki','kaliya'];
console.log('mmm'.touppercase());

const uppernames = names.map((n) => { return n.touppercase() });
console.log(uppernames);


const prices2 =['$455.45','$77.323','$97.12','$2134.9'];
//[455,77,97,2134]
const numprices =prices2.map((p)=>{return parseInt (p.slice(1))});
console.log(numprices);


//
const fullnames = ['samraddhi yadav','Binte Zehra','prateek singh','saurabh'];
console.log('raju rastogi'.split('')[0]);