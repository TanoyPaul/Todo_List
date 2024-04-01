const inputBox = document.querySelector("#input-id");
const listContainer = document.querySelector(".list-container");

let task;
const addTask = document
  .querySelector(".addBtn")
  .addEventListener("click", function () {
    if(inputBox.value === ""){
        document.querySelector('#input-id').placeholder = "Please write some task here to add  ..."
    }
    else{
        task = document.createElement("li");
    task.innerHTML = inputBox.value;
    listContainer.appendChild(task);

    inputBox.value = "";
    saveData()

    let span = document.createElement('span');
    span.innerHTML = "❌";
    task.appendChild(span)
    }
  });


listContainer.addEventListener(
    'click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveData()
        }

        else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
            saveData()
        }
    }
)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()