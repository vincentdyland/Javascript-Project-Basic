const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  console.log(respData);

  CreateUser(respData);
}

function CreateUser(user) {
  const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" 
            alt = "${user.name}" />
        </div>
        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
        </div>
        <ul>
            <li>${user.followers}</li>
            <li>${user.followings}</li>
            <li>${user.public_repos}</li>
        </ul>
    </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser();
    search.value = "";
  }
});
