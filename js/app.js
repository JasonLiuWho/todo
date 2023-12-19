// grab each element
const addButton = document.getElementById("addBtn");
// const donezo = document.getElementsByName("donezo");
const input = document.getElementById("inputMe");

const work = [
    {
        id: 1,
        type: "clean",
        imgUrl:""
    }
]

function newLi () {
    addButton.addEventListener("click", function() {
        // console.log("addButton");
        const finished = document.createElement("li");
        finished.innerText = input.value;
        donezo.appendChild(finished);
        input.value = "";
        finished.addEventListener("click", function(){
            donezo.removeChild(finished);
        })
    })
};

// ask herb about eventlistener inside a eventlistener

// newLi();

// const completed = (obj, el)=> {}
// let addToDoButton = document.getElementById('addTodo');
// let toDOContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('imputField');

// addToDoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('p');
//     paragraph.innerText = inputField.value;
//     toDOContainer.appendChild(paragraph);
//     inputField.value = "";
//     paragraph.addEventListener('click', function(){
//         toDOContainer.removeChild(paragraph);
//     })
// })