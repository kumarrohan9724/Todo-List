let arr = [];
let add = () => {
  arr = [];
  let ull = document.getElementById("myUL"),
    lii = ull.getElementsByTagName("li");
  let i = 0;
  for (i; i < lii.length; i++) {
    a = lii[i].children[2].textContent;
    arr.push(a);
  }
  console.log(arr);

  localStorage.setItem("task", JSON.stringify(arr));
};
function loadEvents() {
  document.querySelector("form").addEventListener("submit", submit);
  document.getElementById("clear").addEventListener("click", clearList);
  document.querySelector("ul").addEventListener("click", deleteOrTick);
}

loadEvents();

function submit(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTask(input.value);
  input.value = "";
}

function addTask(task) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector(".tasksBoard").style.display = "block";
  add();
}

function clearList(e) {
  let ul = (document.querySelector("ul").innerHTML = "");
}

function deleteOrTick(e) {
  if (e.target.className == "delete") deleteTask(e);
  else {
    tickTask(e);
  }
}
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search").value;
  filter = input.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
window.addEventListener("DOMContentLoaded", (event) => {
  let tasks = [];
  if (window.localStorage.task) {
    tasks = JSON.parse(localStorage.getItem("task"));
    console.log(tasks.length);
    let ul = document.querySelector("ul");
    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement("li");

      li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${tasks[i]}</label>`;
      ul.appendChild(li);
    }

    document.querySelector(".tasksBoard").style.display = "block";
  }
});
