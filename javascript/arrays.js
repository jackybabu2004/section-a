const arr = [345, true, 'hello', 45.45];
console.log(typeof arr);
console.log(Array.isArray(arr));

const movies = ['average', 'simba', 'TMK', 'sholay', 'bahubali', 'saiyara'];

console.log(movies.length);
//indexingg
console.log(movies[4]);
console.log(movies[5]);
console.log(movies.indexOf('TMK'));
console.log(movies.at(-2));

movies[2] = 'Mission';
console.log(movies);

//movies=[1,2,4];
//slicing
console.log(movies.slice(2, 5));
console.log(movies.slice(2));
console.log(movies.slice(-3));

[3:45 pm, 26/8/2025] +91 91404 91739: // adding and removing elements from the array

movies.push('Coolie'); // adds element at the end
movies.unshift('Jurassic World'); // adds element at the beginning
console.log(movies);

movies.pop();
movies.shift();

console.log(movies);

// deleting , inserting and replacing elements

// movies.splice(3, 2);  // removing elements
// movies.splice(3, 2, 'Maalik', 'PK'); // replacing elements
movies.splice(3, 0, 'Maalik', 'PK'); // inserting elements
console.log(movies);

const brands = ['Samsung', 'Nokia', 'Oneplus', 'Apple', 'Mi', 'Oppo'];

// print brands from oneplus to mi
console.log(brands.slice(2, 5));

// replace Nokia with 'Motorola'
brands[1] = 'Motorola'

// add new element at the beginning
brands.unshift('Vivo');

// remove last 2 elements
brands.splice(-2);

// add a new brand after Nokia
brands.splice(1, 0, 'Realme');

console.log(brands);
// replace samsung with Blackberry
brands.splice(2, 1, 'Blackberry');

console.log(brands);
[3:45 pm, 26/8/2025] +91 91404 91739: const nums = [4, 6, 8, 9, 3, 1, 2];

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