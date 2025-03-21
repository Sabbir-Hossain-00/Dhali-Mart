
const getCartFromLocal = ()=>{
  return JSON.parse(localStorage.getItem("cartArr"))
 }


const handleRemoveFromLocal = (id , value)=>{
    const getLocalData = getCartFromLocal();
    const newArr = getLocalData.filter((currElm)=>{
      
        return currElm.id !== id ;
        
    });

    value.innerHTML = "";
    localStorage.setItem("cartArr",JSON.stringify(newArr));
    
}




showCartFromLocal = ()=>{
    const tableBody = document.getElementById("table-body");
    const getLocalData = getCartFromLocal();
    for(const data of getLocalData){
      
        const newTr = document.createElement("tr");
        newTr.innerHTML = `
          <td class="border border-gray-200">
                    
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img
                          src="${data.image}"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                </td>
                <td class="border border-gray-200">${data.name}</td>
                <td class="border border-gray-200">${data.quantity}</td>
                <td class="border border-gray-200">$${data.price}</td>
                <td class="border border-gray-200">$${data.quantity * data.price}</td>
                <th class="border border-gray-200">
                  <button  class="remove-btn btn btn-ghost ">Delete</button>
                </th>
        `;
        tableBody.append(newTr);

        const removeBtn = newTr.querySelector(".remove-btn");

        removeBtn.addEventListener("click",(e)=>{
            
            let value = e.target.parentElement.parentElement ;
            handleRemoveFromLocal(data.id , value);
            showSubtotal();
        })
    }
}



const showSubtotal = ()=>{
  const getLocalData = getCartFromLocal();
  const subTotal = document.getElementById("sub-total")
  let total = 0 ;
  for(let data of getLocalData){
    let addTotal = data.quantity * data.price ;
    total = total + addTotal;
    
  }
  subTotal.innerText = total ;
}

showCartFromLocal();
showSubtotal();
