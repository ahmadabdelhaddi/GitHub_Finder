let pic = document.getElementById("pic");
let namee = document.getElementById("name");
let username = document.getElementById("username");
// let username ="ahmadabdelhaddi"
let fllower = document.getElementById("fllower");
let fllowing = document.getElementById("fllowing");
let bio = document.getElementById("bio");
let search = document.getElementById("search");
let searchBtn = document.getElementById("search-btn");
let repo_name = document.getElementById("repo-name");
let repo_public = document.getElementById("repo-public");
let repo_bio = document.getElementById("repo-bio");
let repo_lang = document.getElementById("repo-lang");

// searchBtn.addEventListener("click", function () {
//   console.log("yes cliced");
// fetch(`https://api.github.com/users/${search.value}`)
//   .then((response) => response.json())
//   .then((data) => {
//     username.textContent = data.login;
//     bio.textContent = data.bio;
//     pic.src = data.avatar_url;
//     namee.textContent = data.name;
//     public_repos.textContent = data.public_repos;
//     fllower.textContent = data.followers;
//     fllowing.textContent = data.following;

// });
// .catch(console.log("error"))
//   })

searchBtn.addEventListener("click", () => {
  getrepos();
});

function getrepos() {
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
        public_repos.textContent = data.public_repos;
        fllower.textContent = ` ${data.followers} followers · ${data.following} following`;
      });

    fetch(`https://api.github.com/users/${search.value}/repos`)
      .then((response) => response.json())
      .then((datarepo) => {
        console.log(datarepo);
        // repo_name.textContent = datarepo[0]
        console.log(datarepo[1].name)
        console.log(datarepo[1].visibility)
        // console.log(datarepo[1].deployments_url)
        console.log(datarepo[1].language)
        
       

        for (i = 1; i <= 6; i++) {
          public_repos = document.createElement("div")
          public_repos.className = "public_repos"
          public_repos.appendchild(header)          
          public_repos.appendchild(body)          
          public_repos.appendchild(repo_lang)          

          header = document.createElement("div")
          header.className = "#header"

          header.appendchild(repo_name)          
          header.appendchild(repo_public)      
          
          
          repo_name = document.createElement("div")
          repo_name.className = "repo-name"
          repo_lang.textContent = datarepo[i].name || " "

          repo_public = document.createElement("div")
          repo_public.className = "repo-public"
          repo_lang.textContent = datarepo[i].visibility || " "


          body = document.createElement("div");
          body.className = "#body"

          body.appendchild(repo_bio)      

          repo_bio = document.createElement("div");
          repo_bio.className = "repo-bio" || " "
          repo_lang.textContent = datarepo[i].description


          repo_lang = document.createElement("div");
          repo_lang.className = "repo-lang" || " "
          repo_lang.textContent = datarepo[i].language




        // repo_name.innerHTML = datarepo[i].name;
        // repo_public.innerHTML = datarepo[i].visibility;
        // repo_bio.innerHTML = datarepo[i].description;
        // repo_lang.innerHTML = datarepo[i].language;
      }

        //  public_repos = document.createElement("div");
        //  public_repos.className = "public_repos";

        //  public_repos = document.createElement("div");
        //  public_repos.className = "public_repos";

        //  public_repos = document.createElement("div");
        //  public_repos.className = "public_repos";

        // public_repos.appendchild('#header')
        // public_repos.appendchild('#body')

        // header = document.createElement("div");
        // header.appendchild('repo-name')
        // header.appendchild('repo-public')

        // public_repos.appendchild('#header')

        // 
        //   datarepo[i].innerHTML += `<div class="public_repos">
        //   <div class="header">
        //       <div id="repo-name"><img src=""width="15%" alt="">${datarepo[i].name} </div>
        //       <div id="repo-public">${datarepo[i].visibility}</div>
        //   </div>
        //   <div class="body">
        //       <div id="repo-bio">${datarepo[i].deployments_url}</div>
        //   </div>
        //   <div id="repo-lang"> <img src=""width="4%" alt="">${datarepo[i].language}</div>
        //    </div>`

        // }
      });
  }
}
