document.querySelector("#form").addEventListener("submit",addItem);
var prod = JSON.parse(localStorage.getItem("shoppingItems")) || [];

function addItem(event){
    event.preventDefault();
   
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var type = document.querySelector("#select").value;
    var image = document.querySelector("#img").value;

  var prodObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };

    prod.push(prodObj);
    localStorage.setItem("shoppingItems",JSON.stringify(prod));
}

document.querySelector("button").addEventListener("click",function(){
  window.location.href = "prod.html";
});