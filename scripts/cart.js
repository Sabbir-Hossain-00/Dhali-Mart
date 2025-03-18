



const handleRemoveFromLocal = (value1 , value2)=>{
    console.log(value1);
    const newArr = getLocalData.filter((currElm)=>{
        return currElm[0] !== value1 ;
    });
    value2.innerHTML = "";
    localStorage.setItem("cartArr",JSON.stringify(newArr));
}



const getCartFromLocal = ()=>{
 return JSON.parse(localStorage.getItem("cartArr"))
}

const getLocalData = getCartFromLocal();

showCartFromLocal = ()=>{
    const tableBody = document.getElementById("table-body");
    for(const data of getLocalData){
      
        const newTr = document.createElement("tr");
        newTr.innerHTML = `
          <td class="border border-gray-200">
                    
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img
                          src="${data[3]}"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                </td>
                <td class="border border-gray-200">${data[0]}</td>
                <td class="border border-gray-200">${data[2]}</td>
                <td class="border border-gray-200">$${data[1]}</td>
                <td class="border border-gray-200">$${data[2] * data[1]}</td>
                <th class="border border-gray-200">
                  <button  class="remove-btn btn btn-ghost ">Delete</button>
                </th>
        `;
        tableBody.append(newTr);

        const removeBtn = newTr.querySelector(".remove-btn");

        removeBtn.addEventListener("click",(e)=>{
            const val1 = e.target.parentElement.parentElement.children[1].innerHTML ;
            val2 = e.target.parentElement.parentElement ;
            handleRemoveFromLocal(val1 , val2);
        })
    }
}


showCartFromLocal();