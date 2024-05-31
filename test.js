// const names = ['qwqwqwe', 'wdssd', 'adsFF'];
// const bigNames =  names.map((name) => name.toUpperCase());
// console.group(bigNames);
// console.group(names);

 const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
         favorite: false,
        featured: 'true',
        points: 6
    }
 ];

const myFavorite = things.filter((thing) => thing.favorite);
console.log(myFavorite);

const overPoints = things.filter((point) => point.points > 50);
console.log(overPoints);

const sortingNumber = (id) => {
     return things.filter((thing) => thing.id === id);
};
const seletedThing = sortingNumber(2);
console.log(seletedThing);

const featuredItem = things.filter((thing) => thing.featured);
console.log(featuredItem);

const featuredItem = things.find((thing) => thing.featured);
console.log(featuredItem);

console.log(things.filter((thing) => thing.featured)[0]);


const drinkOrders = [
  { id: 0, customerName: 'Zachary', drinkName: 'Dirty Martini'},
  { id: 1, customerName: 'Juan', drinkName: 'Zombie'},
  { id: 2, customerName: 'Kayla', drinkName: 'Mojito'},
  { id: 3, customerName: 'Zachary', drinkName: 'Mojito'}
]

// All challenges will use the drinkOrders array.

// Challenge 1 
// Use the find() method to retrieve the first object with the customerName of 'Juan' and console.log() it.
console.log(drinkOrders.find((order) => order.customerName === 'Juan'));


// Challenge 2  
// Use the find() method to retrieve the first object with the drinkName of 'Mojito' and console.log() it.
// Write your code below this line.
const mojitoDrink = (drinkName) => {
  return drinkOrders.find( (order) => order.drinkName === drinkName );
};
const mojitoFirst = mojitoDrink('Mojito');
console.log(mojitoFirst);


// Challenge 3 
// Use the find() method to retrieve the object with the id of 3 from the drinkOrders array, then console.log only the name of the customer who ordered it, rather than the entire object. Hint: Use find() to get the object, then dot notation to access the id.
// Write your code below this line.
const idThreeDrinker = drinkOrders.find((order) => order.id === 3);

console.log(idThreeDrinker.customerName);

// Bonus Challenge
// Use the filter() method to create a new array containing only the objects with the customerName of 'Zachary'. Then, use the find() method on this new array to retrieve the id of the object with the drinkName of 'Mojito', and console.log() that id.
// Write your code below this line.
const newCustomer = drinkOrders.filter((order) => order.customerName === 'Zachary' );
const zacThree = newCustomer.find( (order) => order.drinkName === 'Mojito' );

console.log(zacThree.id);


import { useState } from "react";
useState();
const App = () => {
    useState();
}

