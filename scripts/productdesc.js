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
        var name = document.createElement("h3");
        name.textContent = el.name;
        var brand = document.createElement("p");
        brand.textContent = "Brand : "+el.brand;
        var color = document.createElement("p");
        color.textContent = "Color : "+el.color;
        var price = document.createElement("p");
        price.textContent = "Starting at INR "+el.price;
        price.style.color = "red";
        var coupan_div = document.createElement("div");
        coupan_div.setAttribute("id","coupan_div");
        var coupan_desc = document.createElement("p");
        coupan_desc.textContent = "You have coupons available! Visit the coupon page.";
        // var coupon_img = document.createElement("img");
        // coupon_img.src = "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-50--coupon-icon-image_1144359.jpg";
        coupan_div.append(coupan_desc);
        var btn = document.createElement("button");
        var rating = document.createElement("div");
        rating.classList.add("rating");

    // Create and append the star icons based on the rating
    for (var i = 1; i <= 5; i++) {
      var star = document.createElement("span");
      star.classList.add("fa", "fa-star");
      if (i <= el.rating) {
        star.classList.add("checked");
      }
      rating.appendChild(star);
    }
        btn.textContent = "Add To Cart";
        btn.setAttribute("id","cartbtn");
        btn.addEventListener("click",function(){
            addToCart(el);
        })
        div1.append(img);
        div2.append(name,brand,rating,color,price,coupan_div,btn);
     document.getElementById("parent").append(div1,div2);
    })
    
}


var cart_data = JSON.parse(localStorage.getItem("cartData")) || [];
function addToCart(product){
    var existingProduct = cart_data.find(function(item) {
        return item.name === product.name;
      });
    
      if (existingProduct) {
        // Product already exists in the cart
        showPopup1(existingProduct);
      } else {
        // Product doesn't exist in the cart, add it with quantity 1
        product.quantity = 1;
        cart_data.push(product);
        saveCartDataAndRedirect();
      }
}

function showPopup1(product) {
    var popup1 = document.createElement("div");
    popup1.classList.add("popup1");
  
    var message = document.createElement("p");
    message.textContent =
      "Product already exists in the cart. Do you want to increase the quantity?";
  
    var quantityIncreaseBtn = document.createElement("button");
    quantityIncreaseBtn.textContent = "Increase Quantity";
    quantityIncreaseBtn.addEventListener("click", function() {
      increaseQuantity(product);
    });
  
    var cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", function() {
      closePopup1();
    });
  
    popup1.append(message, quantityIncreaseBtn, cancelBtn);
    document.body.appendChild(popup1);
  }
  
  function increaseQuantity(product) {
    product.quantity++;
    saveCartDataAndRedirect();
  }
  
  function closePopup1() {
    var popup1 = document.querySelector(".popup1");
    if (popup1) {
      popup1.remove();
    }
  }
  
  function saveCartDataAndRedirect() {
    localStorage.setItem("cartData", JSON.stringify(cart_data));
    window.location.href = "cart.html";
  }

  document.addEventListener("DOMContentLoaded", function() {
    var loginLogo = document.getElementById("login-logo");
    loginLogo.addEventListener("click", function() {
      window.location.href = "login.html";
    });
    var cartref = document.getElementById("cart-logo");
    cartref.addEventListener("click",function(){
      window.location.href = "cart.html"
    })
  });