const container = document.querySelector(".note-container");
const btn = document.querySelector(".btn");
let note = document.querySelectorAll(".input");

function update(){
    localStorage.setItem("note", container.innerHTML);
}

function show(){
    container.innerHTML = localStorage.getItem("note");
}

show();
btn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let icon = document.createElement("img");
    inputbox.setAttribute("contenteditable", "true");
    inputbox.classList.add("input");
    
    icon.src = "img/delete.png";
    container.appendChild(inputbox).appendChild(icon);
})

container.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }else if(e.target.tagName === "P"){
        note =  document.querySelectorAll(".input");
        note.forEach(nt =>{
            nt.onkeyup = function(){
                update();
            }
        });
    }
})

document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})