`use strict`;

const players = {
  name: `Lebron James`,
  club: `LA Lakers`,
  address: {
    city: `Los Angeles`,
  },
};

console.log();

// destructuring in objects

const {
  name,
  club,
  address: { city },
} = players;
// console.log(name, club, city);

console.log(`${name} of ${club} lives in ${city} city.`);

console.log(`**************************************`);

// ***********************************
// Challnge 1

const student = {
  name: `Kyle`,
  age: 24,
  projects: {
    diceGame: `Two player dice game using JavaScript`,
  },
};

const {
  name: firstName,
  age,
  projects: { diceGame },
} = student;

console.log(`${firstName} is ${age} years old and he has built a ${diceGame}.`);

console.log(`**************************`);

// Destructuring Arrays

const names = [`Dylan`, `Coding Good`, `Israel`];

const [coderName, codingState, country] = names;

console.log(coderName, codingState, country);

console.log(`****************************************`);

// Object literl

// function addressMaker(city, state) {
//   // const newAddress = { newCity: city, newState: state };

//   // Using Object literals
//   const newAddress = { city, state };
//   console.log(newAddress);
// }

// addressMaker(`Jaipur`, `Rajasthan`);

console.log(`*******************************`);

// Object literals challnge

function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: `India`,
  };
  console.log(
    `I live in ${city} city capital of ${state} in the dynamic country of ${newAddress.country}`
  );
}
addressMaker({ city: `Jaipur`, state: `Rajasthan` });

console.log(`*********************************`);

// Forof loop

const incomes = [62000, 75000, 15000];
let totals = 0;

for (let income of incomes) {
  totals += income;
}

console.log(`Total Income: ${totals}`);

console.log(`************************************`);

// challenge: forof loop

const students = [
  {
    name: `John`,
    city: `new york city`,
  },
  {
    name: `Arpit`,
    city: `Jaipur`,
  },
  {
    name: `Rajesh`,
    city: `Delhi`,
  },
];

for (const student of students) {
  console.log(`${student.name} lives in ${student.city}`);
}

console.log(`************************************`);

// Spread Opreator

const friends = [`Priyanshu`, `Rajesh`, `Avinash`];

const personalFriends = [...friends];
console.log(personalFriends);

console.log(`************************************`);

// spread opreator challenge

const shoppingList = [`eggs`, `milk`, `butter`];

const shoppingBasket = [`buttermilk`, ...shoppingList, `Biscuits`, `Socks`];
console.log(shoppingBasket);

console.log(`***********************************`);

// default params:- challenge

const foodShopping = (food = `somthing`) =>
  `I am going to buy ${food} from the grocerry story`;

console.log(foodShopping(`milk`));
console.log(foodShopping());

console.log(`***************************************`);

// includes challenge

const listIngredients = [`flour`, `sugar`, `eggs`, `butter`];

const makingCake = listIngredients.includes(`chocolate`)
  ? `We are making the chocolate cake`
  : `We do not have chocolate so we cannot make the chocolate cake.`;

console.log(makingCake);

console.log(`*******************************`);

// import export data set

import { data } from "./example.js";

data.push(`Arpit`);
console.log(data);

console.log(`*********************************************`);

// import export challenge

import { addNumbers } from "./data.js";

const results = addNumbers(75, 25);

console.log(`Addition of two numbers wil be: ${results}`);

console.log(`****************************************************`);

console.log(`coding starts`);

// padstart and padend challenge

let example = `youtube.com/CodingTutorials360`;

console.log(example.padStart(40, "$"));
console.log(example.padEnd(40, "$"));
console.log(example.padStart(100));

// if second parameter is absent then JS will add a empty string only.

console.log(`####################################################`);

// classes in JavaScript

class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound) {
    console.log(sound);
  }

  // static methods
  static friendlyAnimal() {
    console.log(`I am a very friendly animal.`);
  }

  // get keyword in JS
  get metaData() {
    return `Type: ${this.type} and Legs: ${this.legs}`;
  }
}

// Inheritence in classes

const animal1 = new Animal(`Mammath`, 4);
class Mouse extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }

  makeNoise(sound = "mepw-mepw-mepw") {
    console.log(sound);
  }
}
// console.log(animal1);

// console.log(animal1.makeNoise(`Meow-Meow`));
// console.log(Animal.friendlAnimal());

// get in classes

console.log(animal1.metaData);

const mouse = new Mouse(`Jerryy`, 4, true);
console.log(mouse);
console.log(mouse.makeNoise());
console.log(mouse.metaData);

console.log(`************************************************`);

// classes challenge

class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  playerBirthCountry(name = `Messi`, country = `Argentina`) {
    console.log(`${name} was born in ${country}.`);
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  tennisPlayer(name, country, age) {
    console.log(`${name} is ${age} years old tennis player from ${country}`);
  }
}

// creating objects

const player1 = new Player(`Cristiano Ronaldo`, `Purtgal`);

console.log(player1.name);
console.log(player1.country);

player1.playerBirthCountry(`Cristiano Ronaldo`, `Purtgal`);

const player2 = new TennisPlayer(`Novak Djokovic`, `Serbia`, 37);

console.log(player2.name);
console.log(player2.country);
console.log(player2.age);

player2.playerBirthCountry(`Novak`, `Serbia`);
player2.tennisPlayer(`Novak Djokovic`, `Serbia`, 37);

console.log(`**********************************************`);

// Promises in JavaScript

const buyNewTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        reject("Sorry, your payment is failed!!");
      } else {
        resolve("Your payment is successful,welcome abroad!!");
      }
    }, 3000);
  });
};

buyNewTicket()
  .then((sucess) => console.log(sucess))
  .catch((error) => console.log(error));

console.log(`**************************************`);

// promises challenge

const newUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject("Sorry, user does not exist!!");
      } else {
        const user = {
          name: `Arpit Mishra`,
          age: 24,
          isMarried: false,
        };
        resolve(user);
      }
    }, 3000);
  });
};

newUserLoggedIn()
  .then((sucess) => console.log(sucess))
  .catch((error) => console.log(error));

console.log(`***********************************************************`);

/**
 * Fetch
 *
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

fetch(`https://jsonplaceholder.typicode.com/comments/1`)
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log(
  `**********************************************************************************************`
);
