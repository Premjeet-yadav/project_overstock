var product_desc = JSON.parse(localStorage.getItem("decription_data")) || [];
displayproduct()
function displayproduct(){
    product_desc.map(function(el){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.setAttribute("id","side_panel");
        div1.setAttribute("id","product_image");

        var img = document.createElement("img");
        img.setAttribute("src",el.img_url);
        img.setAttribute("alt",el.name);
        // img.setAttribute("class","product_image");
        var name = document.createElement("h1");
        name.textContent = el.name;
        var color = document.createElement("h4");
        color.textContent = "Color : "+el.color;
        var price = document.createElement("p");
        price.textContent = "Price : "+"₹"+el.price;
        var btn = document.createElement("button");
        btn.textContent = "Add To Bag";
        btn.setAttribute("id","cartbtn");
        btn.addEventListener("click",function(){
            addToCart(el);
        })
        div1.append(img);
        div2.append(name,color,price,btn);
     document.getElementById("parent").append(div1,div2);
    })
    
}


var cart_data = JSON.parse(localStorage.getItem("cartData")) || [];
function addToCart(product){
    cart_data.push(product);
    localStorage.setItem("cartData",JSON.stringify(cart_data));
    window.location.href="cart.html";
}