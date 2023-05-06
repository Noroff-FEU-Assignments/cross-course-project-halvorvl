const url = " https://www.halvorvl.com//wp-json/wc/store/products?per_page=16";

const createHtmlHere = document.querySelector(".jackets_container");

async function getProducts() {
  const response = await fetch(url);

  const result = await response.json();

  createHtmlHere.innerHTML = " <h1> All Jackets </h1>";

  console.log(result);

  for (let i = 0; i < result.length; i++)
    for (let j = 0; j < result[i].images.length; j++) {
      console.log(result[i].images[j]);
      createHtmlHere.innerHTML += `<section class="jackets products">  <img
            src="${result[i].images[j].src}"
            class="best_selling_jackets_images"
          /> <p class="product-name">${result[i].name}</p>
          <div class="price-value"> ${result[i].price_html}  </div> 
           <a href="product_specific_page.html?id=${result[i].id}" >
      <button class="product_information">Product Information</button>
      </a>

   
 </section>`;
    }
}

getProducts();
