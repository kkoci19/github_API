var username = "";
var result = document.querySelector(".result");

async function getInfo() {
    var response = await fetch('https://api.github.com/users/' + username)
    var info = await response.json();
    // console.log(info);
    result.innerHTML = displayData(info);
}

function getUsername(el) {
    username = el.value;
    // console.log(username)
}

function displayData(myData) {
    if (myData.login) {
        return `<div class="result" >
            <img src="${myData.avatar_url}" alt="${myData.login}">
            <p class="text-center text-warning p-2 ">username:${myData.login}</p>
            <p class="text-center text-warning p-2 ">type:${myData.type}</p>
        </div>`
    } else return `<p class="text-center text-danger p-2 result"> Ky username nuk ekziston </p>`

}