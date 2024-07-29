const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if( inputBox.value !== '' || false ){

        let li = document.createElement("li");
        li.innerHTML = `
            ${inputBox.value}
            <img src="./assets/trash.svg" alt="deletar-tarefa">
        `;
        listContainer.appendChild(li);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();

    } else if (event.target.tagName === "IMG") {
        event.target.parentElement.remove();
        saveData();
    }

});

document.getElementById('input-box').addEventListener('keydown', function(event) {
    if( event.key === "Enter" ){
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();