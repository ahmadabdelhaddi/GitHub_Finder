let pic = document.getElementById("pic");
let namee = document.getElementById("name");
let username = document.getElementById("username");
let fllower = document.getElementById("fllower");
let fllowing = document.getElementById("fllowing");
let bio = document.getElementById("bio");
let search = document.getElementById("search");
let searchBtn = document.getElementById("search-btn");
let repo_name = document.getElementById("repo-name");
let repo_public = document.getElementById("repo-public");
let repo_bio = document.getElementById("repo-bio");
let repo_lang = document.getElementById("repo-lang");
let repo = document.getElementsByClassName("repo")[0];
let pub_repos = document.querySelector("#pub_repos");

searchBtn.addEventListener("click", () => {
  getRepos();
});

function getRepos() {
  if (search.value == "") {
    console.log(search.value);
  } else {
    fetch(`https://api.github.com/users/${search.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        username.textContent = data.login;
        bio.textContent = data.bio;
        pic.src = data.avatar_url;
        namee.textContent = data.name;
        fllower.textContent = ` ${data.followers} followers · ${data.following} following`;
        pub_repos.innerHTML = data.public_repos;
      })
      .catch((error) => console.log(error));

    fetch(`https://api.github.com/users/${search.value}/repos`)
      .then((response) => response.json())
      .then((datarepo) => {
        console.log(datarepo);
        for (let i = 1; i <= 6; i++) {
          const repoData = datarepo[i];

          // const repo = document.createElement("div");
          // repo.classList.add("repo");
          

          const public_repos = document.createElement("div");
          public_repos.classList.add("public_repos");

          const header = document.createElement("div");
          header.setAttribute("id", "header");

          const repo_name = document.createElement("div");
          repo_name.setAttribute("id", "repo-name");
          repo_name.textContent = repoData.name;

          const repo_public = document.createElement("div");
          repo_public.setAttribute("id", "repo-public");
          repo_public.textContent = repoData.visibility;

          header.appendChild(repo_name);
          header.appendChild(repo_public);

          const body = document.createElement("div");
          body.setAttribute("id", "body");

          const repo_bio = document.createElement("div");
          repo_bio.setAttribute("id", "repo-bio");
          repo_bio.textContent = repoData.description;

          body.appendChild(repo_bio);

          const repo_lang = document.createElement("div");
          repo_lang.setAttribute("id", "repo-lang");
          repo_lang.textContent = repoData.language;

          public_repos.appendChild(header);
          public_repos.appendChild(body);
          public_repos.appendChild(repo_lang);

          repo.appendChild(public_repos);
        }
      })
      .catch((error) => console.log(error));
  }
}
