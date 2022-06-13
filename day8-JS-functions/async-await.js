//  fetch(url) ->  to get data from URL

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
};

// getData();

//  when you do not need await
// async function getData() {
//     const response = await (1+2);
//     console.log(response);
// };
