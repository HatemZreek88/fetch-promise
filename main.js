fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => {
    let json = data.json();
    // get the data from the website and then convert it.
    return json;
  })
  .then(json => {
    // console.log(json);
    let user = json[Math.floor(Math.random() * 10)].username; // get random username from json array
    // console.log(user);
    return user;
  })
  .then(user => {
    let img = `https://joeschmoe.io/api/v1/${user}
`; // fetch image from server
    return { image: img, title: user }; // we return an object
  })
  .then(object => {
    // getting reference of img tag in html
    let image = document.querySelector("img");
    // getting reference of div tag with id title in html
    let title = document.getElementById("title");
    image.src = object.image;
    title.innerHTML = object.title;
  })
  .catch(err => {
    console.log(err);
  });
