const pencil = document.getElementById("pencil");
const allItems = document.querySelector(".allItems");
const userInput = document.querySelector(".userInput");

pencil.addEventListener("click",function (){
    allItems.innerHTMl = "";
})

userInput.addEventListener("keydown",function (event){
    if(event.key === "Enter"){
        addItem();
    }
})

function addItem(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function (){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);
    userInput.value = "";
}