const url = " https://www.halvorvl.com//wp-json/wc/store/products";

const createHtmlHere = document.querySelector(".jackets_container");

async function getWomenProducts() {
  const response = await fetch(url);

  const result = await response.json();

  createHtmlHere.innerHTML = " <h1>Women`s Jackets </h1>";

  console.log(result);

  for (let i = 0; i < result.length; i++)
    for (let j = 0; j < result[i].images.length; j++) {
      {
      }

      console.log(result[i].categories);

      {
        if (result[i].categories[0].name === "Women`s Jackets")
          createHtmlHere.innerHTML += `<section class="jackets products">  <img
            src="${result[i].images[j].src}"
            class="best_selling_jackets_images"
          />  ${result[i].name} ${result[i].price_html}  
          <a href="product_specific_page.html?id=${result[i].id}" >
     <button class="product_information">Product Information</button>
      </a>

   
 </section>`;
      }
    }
}

getWomenProducts();
