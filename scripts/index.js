




const handleIncrement = (countValue) => {
  let currentCount = parseInt(countValue.innerText);
  currentCount++;
  countValue.innerText = currentCount;
};

const handleDecrement = (countValue) => {
  let currentCount = parseInt(countValue.innerText);
  if (currentCount > 1) {
    currentCount--;
    countValue.innerText = currentCount;
  }
};


const getCartDetailsFromLocal = ()=>{
  return JSON.parse(localStorage.getItem("cartArr"));
}

const getLocalData = getCartDetailsFromLocal() || [];


const handleAddToCart = (name, price, countVal , img) => {
  
  getLocalData.push([name,price,countVal.innerText,img]);
  localStorage.setItem("cartArr",JSON.stringify(getLocalData));
  countVal.innerText = 1 ;

  
};

const showProducts = () => {
  const productContainer = document.getElementById("product-container");
  for (let product of products) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
          <div class="card bg-base-100 w-96 h-140 shadow-sm">
              <figure>
                  <img class="w-2/4" src="${product.image}" />
              </figure>
              <div class="card-body">
                  <h2 class="card-title">${product.title}</h2>
                  <p>${product.description}</p>
                  <h2 class="card-title">Price : $<span>${product.price}</span></h2>

                  <div class="card-actions justify-start">
                      <div class="bg-gray-100 w-fit px-2 py-1 rounded-md flex justify-center items-center">
                          <button class="decriment px-3 border-r border-r-gray-300 cursor-pointer">-</button>
                          <span class="count-value text-xl px-3 border-r border-r-gray-300">1</span>
                          <button class="increment px-3 cursor-pointer">+</button>
                      </div>
                      <button class="add-to-cart-btn btn btn-primary">Add to Cart</button>
                  </div>
              </div>
          </div>
      `;
    productContainer.appendChild(newDiv);

    const decrementBtn = newDiv.querySelector(".decriment");
    const incrementBtn = newDiv.querySelector(".increment");
    const countValue = newDiv.querySelector(".count-value");

    decrementBtn.addEventListener("click", () => {
      handleDecrement(countValue);
    });

    incrementBtn.addEventListener("click", () => {
      handleIncrement(countValue);
    });

    const addToCartBtn = newDiv.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      handleAddToCart(product.title, product.price, countValue ,product.image );
    });
  }
};

showProducts();

