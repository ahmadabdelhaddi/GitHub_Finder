let username = document.getElementById("username");
let pic_1 = document.getElementById("pic-1");
let name_1 = document.getElementById("name-1");
let public_repos_1 = document.getElementById("public_repos-1");
let followers_1 = document.getElementById("followers-1");
let search_1 = document.getElementById("search-1");
// #####################
let winer_1 = document.querySelector("#winer-1");
let whowinner = document.getElementById("whowinner");
let winer_2 = document.querySelector("#winer-2");
// #####################

let username_2 = document.getElementById("username-2");
let pic_2 = document.getElementById("pic-2");
let name_2 = document.getElementById("name-2");
let public_repos_2 = document.getElementById("public_repos-2");
let followers_2 = document.getElementById("followers-2");
let search_2 = document.getElementById("search-2");
 let search_btn=document.getElementById("search-btn");
// ################
  search_btn.addEventListener("click",()=>{
    window.location.href="index.html"
  })

search_1.addEventListener("click", () => {
  getFirstProfile();
});

search_2.addEventListener("click", () => {
  getSecondProfile();
});

whowinner.addEventListener("click", () => {
  whoWinner();
});

function getFirstProfile() {
  fetch(`https://api.github.com/users/${username.value}`)
    .then((repo) => repo.json())
    .then((data) => {
      console.log(data);
      pic_1.src = data.avatar_url;
      name_1.innerHTML = data.login;
      public_repos_1.innerHTML = `Count Off Repos: ${data.public_repos}`;
      followers_1.innerHTML = `followers ${data.followers}`;
    })
    .catch(console.log("error"));
}

function getSecondProfile() {
  fetch(`https://api.github.com/users/${username_2.value}`)
    .then((repoq) => repoq.json())
    .then((dataq) => {
      console.log(dataq);
      pic_2.src = dataq.avatar_url;
      name_2.innerHTML = dataq.login;
      public_repos_2.innerHTML = `Count Off Repos: ${dataq.public_repos}`;
      followers_2.innerHTML = `followers ${dataq.followers}`;
    })
    .catch(console.log("error"));
}

function whoWinner() {
  let winer_1 = document.querySelector("#winer-1");
  let winer_2 = document.querySelector("#winer-2");

  if (username.value !== "" && username_2.value !== "") {
    if (
      parseInt(public_repos_1.innerHTML.split(" ")[3]) >
      parseInt(public_repos_2.innerHTML.split(" ")[3])
    ) {
      winer_1.innerHTML = "Winner";
      winer_2.innerHTML = "Loser";
    } else if (
      parseInt(public_repos_1.innerHTML.split(" ")[3]) ==
      parseInt(public_repos_2.innerHTML.split(" ")[3])
    ) {
      if (
        followers_1.innerHTML.split(" ")[1] >
        followers_2.innerHTML.split(" ")[1]
      ) {
        winer_1.innerHTML = "Winner";
        winer_2.innerHTML = "Loser";
      } else {
        winer_1.innerHTML = "Losers";
        winer_2.innerHTML = "Winner";
      }
      if (
        parseInt(public_repos_1.innerHTML.split(" ")[3]) ==
        parseInt(public_repos_2.innerHTML.split(" ")[3])
      ) {
        if (
          followers_1.innerHTML.split(" ")[1] ==
          followers_2.innerHTML.split(" ")[1]
        ) {
          winer_1.innerHTML = "Tie";
          winer_2.innerHTML = "Tie";
        }
      }
    } else {
      winer_1.innerHTML = "Loser";
      winer_2.innerHTML = "Winner";
    }
  }
}
