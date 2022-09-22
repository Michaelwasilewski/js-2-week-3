// // console.log("hello")

// // // fetch("https://reqres.in/api/users",{})

// // console.log(fetch("https://reqres.in/api/users"));

// // fetch("https://reqres.in/api/users")
// // .then(res => res.json())
// // .then(data => console.log(data.data))
// // .catch(error => console.log(error))

// console.log("hello");
// // fetch("",{})
// console.log(
//   fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "Kevin" }),
//   })
// );
// const fetchOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "Kevin" }),
// };
// fetch("https://reqres.in/api/users")
//   // .then(res => console.log(res))
//   .then((res) => {
//     if (res.ok) {
//       console.log("SUCCESS");
//       return res.json();
//     } else {
//       console.log("NOT SUCCESSFUL");
//     }
//   })
//   // .then(res => res.json())
//   .then((jsonResponse) => console.log(jsonResponse))
//   .catch((err) => console.log(err));


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  
// An object that contains our options
const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  
  // Using the `fetchOptions` object we created aboves
  fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));
  

    