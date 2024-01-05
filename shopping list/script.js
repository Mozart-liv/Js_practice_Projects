const inputTag = document.getElementsByClassName("form-control")[0];
const orderList = document.getElementsByClassName("orderList")[0];

let productId = 1;
const handleChange = (event)=>{
    const inputValue = inputTag.value;
    const productCon = document.createElement("div");
    productCon.classList.add("productCon");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", ()=>{
        const classExist = parentDiv.classList.contains("purchase");
        if(classExist){
            parentDiv.classList.remove("purchase");
        }else{
            parentDiv.classList.add("purchase");
        }
        
    })
    const span = document.createElement("span");
    const trash = document.createElement("i");
    trash.addEventListener("click", (event)=>{
        console.log(productCon.remove());
    })
    trash.classList.add("fa-solid", "fa-trash-can")
    span.id = productId;
    const product = productId.toString() + ". " + inputValue
    span.append(product);
    parentDiv.append(span);
    productCon.append(parentDiv, trash);
    orderList.append(productCon);
    inputTag.value = "";
    productId += 1;
};
inputTag.addEventListener("change", handleChange);