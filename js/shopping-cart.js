let productsInCart = JSON.parse(localStorage.getItem(`ShoppingCart`));
if (!productsInCart) {
  productsInCart = [];
}
const hideButtonWhenCartIsEmpty = document.querySelector(".hidden");
const parentElement = document.querySelector(".shoppingCartHtml");
const sumPriceCartSymbol = document.querySelector(".total-price");
const products = document.querySelectorAll(".products");
const addedToCart = document.querySelector(".addedToCart");

const shoppingCartHtml = function () {
  localStorage.setItem(`ShoppingCart`, JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `<section class="cart-info">
					<img src="${product.image}" class="cart_image">
					<div>
						<h2>${product.name}</h2>
						<h3>$${product.price}</h3>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div> 
                        
					</div>
						
				</section>`;
    });

    parentElement.innerHTML = result.join(``);
    sumPriceCartSymbol.innerHTML = `Total $ ` + totalPrice();
  } else {
    sumPriceCartSymbol.innerHTML = ` is empty `;

    hideButtonWhenCartIsEmpty.innerHTML = "";
  }
};

function updateProductsInCart(product) {
  {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id === product.id) {
        productsInCart[i].count += 1;
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;

        return;
      }
    }
  }

  productsInCart.push(product);
}

products.forEach((product) => {
  product.addEventListener("click", (e) => {
    if (e.target.classList.contains("addToCart")) {
      const productId = e.target.dataset.productId;
      const productName = product.querySelector(".product-name").innerHTML;
      const productPrice = product.querySelector(".price-value").innerHTML;
      const productPriceToNumber = Number(productPrice);
      const productImage = product.querySelector("img").src;

      let productsToCart = {
        name: productName,
        price: productPriceToNumber,
        basePrice: +productPrice,
        image: productImage,
        count: 1,
        id: productId,
      };

      addedToCart.style.display = "block";

      addedToCart.addEventListener("click", (e) => {
        if (e.target.classList.contains("continureShopping")) {
          addedToCart.style.display = "none";
        } else if (e.target.classList.contains("goToCart")) {
          open("cart.html", "_self");
        }
      });

      updateProductsInCart(productsToCart);

      shoppingCartHtml();
    }
  });
});

const totalPrice = function () {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });

  return sum;
};

parentElement.addEventListener("click", (e) => {
  const isPlusButton = e.target.classList.contains("button-plus");
  const isMinusButton = e.target.classList.contains("button-minus");
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    shoppingCartHtml();
  }
});

shoppingCartHtml();
totalPrice();
