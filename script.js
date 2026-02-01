let currentUser = "";

const users = [
  {
    id: "aarav",
    name: "Aarav Sharma",
    bio: "Guitar Tutor",
    location: "India",
    rating: "⭐ 4.9",
    profilePic: "images/aarav.jfif"
  },
  {
    id: "meera",
    name: "Meera Gupta",
    bio: "Dance Instructor",
    location: "India",
    rating: "⭐ 4.8",
    profilePic: "images/meera.jfif"
  },
  {
    id: "rahul",
    name: "Rahul varma ",
    bio: "Python instructor",
    location: "India",
    rating: "⭐ 4.9",
    profilePic: "images/rahul.jfif"
  },
  {
    id: "karan",
    name: "Karan Reddy",
    bio: "Artist",
    location: "Math Tutor",
    rating: "⭐ 4.9",
    profilePic: "images/karan.jfif"
  },
];

function login() {
  currentUser = document.getElementById("username").value;
  document.getElementById("sidebarName").innerText = currentUser;
  document.getElementById("auth").style.display = "none";
  document.getElementById("app").style.display = "block";
  showSection("home");
}

function showSection(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
  clearSearch();
}

function searchUsers() {
  const q = searchBar.value.toLowerCase();
  searchResults.innerHTML = "";

  if (!q) return;

  users
    .filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.bio.toLowerCase().includes(q)
    )
    .forEach(u => {
      const div = document.createElement("div");
      div.className = "search-item";

      div.innerHTML = `
        <img src="${u.profilePic}">
        <span>${u.name}</span>
      `;

      div.onclick = () => openUserProfile(u.id);

      searchResults.appendChild(div);
    });
}

function clearSearch() {
  searchBar.value = "";
  searchResults.innerHTML = "";
}

function openUserProfile(userId) {
  const user = users.find(u => u.id === userId);

  if (!user) {
    alert("User not found");
    return;
  }

  showSection("profile");

  document.getElementById("fullName").innerText = user.name;
  document.getElementById("profileBio").innerText = user.bio;
  document.getElementById("profileLocation").innerText = "📍 " + user.location;
  document.getElementById("profileRating").innerText = user.rating;
  document.getElementById("profilePic").src = user.profilePic;
}

function likePost(btn) {
  btn.innerText = "❤️ Liked";
  btn.disabled = true;
}

function commentPost() { alert("Demo"); }
function savePost() { alert("Saved"); }
function sharePost() { alert("Shared"); }

const chats = [
  { name: "Rahul Verma", messages: ["Hi!", "I want to learn Python"] }
];

function openChat(i) {
  chatName.innerText = chats[i].name;
  chatMessages.innerHTML = chats[i].messages.map(m => `<div>${m}</div>`).join("");
}
// ADD A NEW TODO
function addTodo() {
  const text = prompt("Enter your to-do:");
  if (!text) return;

  const div = document.createElement("div");
  div.className = "todo-note";
  div.innerText = "✔ " + text;

  document.getElementById("todoList").appendChild(div);
}

// SAVE TODOS
function saveTodos() {
  const todos = [];
  document.querySelectorAll("#todoList .todo-note").forEach(t => {
    todos.push(t.innerText);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  alert("To‑Do list saved!");
}

// LOAD TODOS WHEN PAGE OPENS
function loadTodos() {
  const saved = JSON.parse(localStorage.getItem("todos"));
  if (!saved) return;

  const list = document.getElementById("todoList");
  list.innerHTML = "";

  saved.forEach(t => {
    const div = document.createElement("div");
    div.className = "todo-note";
    div.innerText = t;
    list.appendChild(div);
  });
}

// AUTO LOAD ON PAGE LOAD
window.addEventListener("load", loadTodos);

function savePost() { 
  alert("Saved"); 
}
