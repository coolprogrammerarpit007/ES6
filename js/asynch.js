`use strict`;

// const getData = async () => {
//   // simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;

//       if (error) {
//         reject(`Sorry,your request is been denied`);
//       } else {
//         resolve(`Congrats!! your promise is been fulfilled!!`);
//       }
//     }, 3000);
//   });
// };

console.log(`Fetch API HANDLING`);

// const getData = async () => {
//   // getting data from a server

//   // fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json));
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await x.json();
//   console.log(data);
//   // console.log(x);
//   // return 786;
// };

// const main = async () => {
//   console.log(`Loading Modules`);
//   console.log(`Handling Modules`);
//   console.log(`Processing Modules`);
//   const data = await getData();
//   console.log(data);
//   console.log(`Processed data`);
//   console.log(`Task two begins`);
// };

// main();
// console.log(data);

// Approach 1 to handle asnchronous js
// data
//   .then((sucess) => {
//     console.log(sucess);
//     console.log(`Processing data`);
//     console.log(`Handling a new task!!`);
//   })
//   .catch((err) => console.log(err));

// Approach 2:- using async , await to handle asynchronous JavaScript

console.log(`**************************************************`);
console.log(`Doing a post request `);

// fetch(`https://jsonplaceholder.typicode.com/comments`, {
//   method: "POST",
//   body: JSON.stringify({
//     postId: 1,
//     name: "Arpit",
//     email: "arpit.mishra.out@gmail.com",
//     body: "That was awesome",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

console.log(
  `********************************************************************************************`
);

// challenge
console.log(`fetch challenge`);

const newData = async () => {
  const x = await fetch("https://jsonplaceholder.typicode.com/comments/1");

  const data = await x.json();
  console.log(data);
  console.log(`New data processed..`);
  console.log(`New task started..`);
};

newData();

console.log(`now sending the post request`);

const newPostData = async () => {
  const x = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
      postId: 1,
      name: "Rajesh",
      email: "rajesh.sharma.out@gmail.com",
      body: "that was great!!",
    }),
  });
  const data = await x.json();
  console.log(data);
};

newPostData();

console.log(`****************************************************`);

// async and await functions

const photos = [];

const uploadPhotos = async () => {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("Profile Photo");
      resolve("Photo Uploaded");
    }, 3000);
  });

  let result = await uploadStatus.then((sucess) => sucess);
  console.log(result);
  console.log(photos.length);
};

uploadPhotos();

console.log(
  `****************************************************** Random Jock Challeneg *******************************`
);

const apiUrl = "https://api.chucknorris.io/jokes/random";

// const randomJoke = async () => {
//   let newJoke = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const x = fetch(apiUrl);
//       const joke = x.json();
//       console.log(x);
//       resolve("Sucess your jock has been uploaded : " + joke);
//     }, 3000);
//   });

//   const randomJokes = await newJoke.then((sucess) => sucess);
//   return randomJokes;
// };

// console.log(randomJoke());

// fetch(apiUrl)
// .then((response) => response.json())
// .then((data) => console.log(data.value));

const randomJoke = async () => {
  const x = await fetch(apiUrl);
  const data = await x.json();
  const joke = await data.value;

  console.log(`Processing Data: `);
  console.log(joke);
};

randomJoke();

console.log(`******************************************************`);

// sets in JS

const exampleSet = new Set([1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 2, 2, 2]);

console.log(exampleSet);
