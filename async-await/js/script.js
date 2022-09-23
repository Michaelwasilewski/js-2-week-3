function getShowSomething() {
  console.log("Hello i am a potato");
}
try {
  getShowSomething();
} catch (error) {
  console.log("bi ba bop this is error brrr shtk");
} finally {
  console.log("run code after anyway cos i dont give a fook");
}

async function getUsers() {
  try {
    const data = await fetch("https://reqres.in/api/users");

    const JsonData = await data.json();
    console.log(JsonData);
    return JsonData;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("api call is done");
  }
};

getUsers();


async function doFetch(url) {
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    const data = await Promise.all([
        doFetch('https://jsonplaceholder.typicode.com/todos/1'),
        doFetch('https://jsonplaceholder.typicode.com/todos/2'),
        doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);
    console.log(data);
}
main();