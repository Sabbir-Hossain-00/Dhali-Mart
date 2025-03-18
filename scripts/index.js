






let count = 1;

const handleIncrement = (countValue)=>{
    count ++ ;
    countValue.innerText = count ;
}

const handleDEcrement = (countValue)=>{
    if(count > 0){
        count -- ;
        countValue.innerText = count ;
    }    
}


const handleAddToCart = (name , price , countVal)=>{
    
    console.log(name , price , countVal.innerText);

    const tableBody = document.getElementById("table-body");
    
    const newRaw = document.createElement("tr");

    newRaw.innerHTML = `
      <td class="border border-gray-200">
                    
                      <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                  </td>
                  <td class="border border-gray-200"> Zemlak, Daniel and Leanno</td>
                  <td class="border border-gray-200">2</td>
                  <td class="border border-gray-200">$300</td>
                  <td class="border border-gray-200">$600</td>
                  <th class="border border-gray-200">
                    <button class="btn btn-ghost ">details</button>
                  </th>
    `;

    
    

}






const showProducts = ()=>{
    const productContainer = document.getElementById("product-container");
    for(let product of products){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        
        <div class="card bg-base-100 w-96 h-140 shadow-sm">
                    <figure>
                      <img class="w-2/4"
                        src="${product.image}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${product.title}</h2>
                      <p>${product.description}</p>

                      <h2 class="card-title">Price : $<span>${product.price}</span></h2>
                      
                      <div class="card-actions justify-start">

                        <div class="bg-gray-100 w-fit px-2 py-1 rounded-md flex justify-center items-center">
                            <button  class="decriment px-3 border-r border-r-gray-300 cursor-pointer ">-</button>
                            <span id="count-value" class=" text-xl px-3 border-r border-r-gray-300">1</span>
                            <button class="increment px-3  cursor-pointer">+</button>
                          </div>

                        <button class="add-to-cart-btn btn btn-primary">Add to Cart</button>

                      </div>
                    </div>
                </div>

        `;
        productContainer.appendChild(newDiv);

        const decrimentBtn = newDiv.querySelector(".decriment");
        const incrementBtn = newDiv.querySelector(".increment");
        
        const countValue = newDiv.querySelector("#count-value");

        
        decrimentBtn.addEventListener("click",(e)=>{
            
            handleDEcrement(countValue);
        });
        incrementBtn.addEventListener("click",(e)=>{
            
            handleIncrement(countValue);
        });




        const addToCartBtn = newDiv.querySelector(".add-to-cart-btn");
        addToCartBtn.addEventListener("click",()=>{
            
            handleAddToCart(product.title , product.price , countValue);
          
        })

    }
}

showProducts();