const createHtmlHere = document.querySelector(".specific_jackets");

const pageName = document.querySelector("name");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const detailsUrl = " https://www.halvorvl.com//wp-json/wc/store/products/" + id;

async function getProductsDetails() {
  const response = await fetch(detailsUrl);

  const result = await response.json();

  createHtmlHere.innerHTML = "";

  console.log(result);

  for (let i = 0; i < result.images.length; i++) {
    {
    }

    createHtmlHere.innerHTML += `<h1> ${result.name}</h1><img
          class="image1"
          src=" ${result.images[i].src}"
          alt="Man in jacket looking up "
        />
        <img
          class="image2"
          src=" ${result.images[i].src}"
          alt="Backside of the jacket"
        />
        <section class="cart">
          <p>95% of costumers gave this jacket a 5 star review</p>
          <section class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </section>
          <p>Choose your Color</p>
          <section class="colors">
            <i class="fa-solid fa-circle green"></i>
            <i class="fa-solid fa-circle military_green"></i>
            <i class="fa-solid fa-circle pink"></i>
            <i class="fa-solid fa-circle blue"></i>
          </section>
          <p>Choose your size</p>
          <section class="sizes">
            <div class="size_box">XS</div>
            <div class="size_box">S</div>
            <div class="size_box">M</div>
            <div class="size_box">L</div>
            <div class="size_box">XL</div>
          </section>
          <a href="checkout.html"
            ><button class="cta_jacket_spesific">Add to cart</button></a
          >
        </section>
        <img
          class="image3"
          src=" ${result.images[i].src}"
          alt="Man in jacket sitting in the woods"
        />
        <img
          class="image4"
          src=" ${result.images[i].src}"
          alt="Man in jacket walking in the woods"
        />
        <section class="description">
          <p>Benefits</p>
          <section class="scales">
            <p>Water resitance</p>
            <img src="../‘images’/scale_9.png" alt="9/10 Water restinace" />
          </section>
          <section class="scales">
            <p>Durabilty</p>
            <img src="../‘images’/scale_8.png" alt="8/10 Durabilty" />
          </section>
          <p>Description</p>
          <p>${result.short_description}
           

          </p>
        </section>`;
  }
}

getProductsDetails();
