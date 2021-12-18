var products = JSON.parse(localStorage.getItem("shoppingItems"));
var cart = []
//  console.log(cart)

products.map(function(elem){
    var div =  document.createElement("div")
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);

    var h2 = document.createElement("h2");
    h2.textContent = elem.name;

    var price = document.createElement("p");
    price.textContent = elem.price;

    var button = document.createElement("button")
    button.textContent="Add to Cart";
    button.addEventListener("click", function(){
        //console.log(elem)
        addToCart(elem)
    })



    div.append(img, h2, price ,button);
    document.querySelector("#cont").append(div);
  });

  function addToCart(elem){
     // console.log(elem.image);
     var cartObj = {
         image : elem.image,
         name : elem.name,
         price : elem.price,

     }
     cart.push(cartObj);
     localStorage.setItem("cartItems",JSON.stringify(cart));
  }

