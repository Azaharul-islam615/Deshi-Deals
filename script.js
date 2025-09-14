const cartBtns=document.getElementsByClassName("cart-btn ")
for(let cartbtn of cartBtns){
    cartbtn.addEventListener("click",()=>{
        const image=cartbtn.parentNode.children[0].children[0]
        const imgsrc=image.src

        const heading=cartbtn.parentNode.children[2].innerText
        const price=cartbtn.parentNode.children[3].children[0].innerText

        
        alert(`Product name ${heading} price ${price} Tk`)
    
        const container=document.getElementById("container")
        
        const div=document.createElement("div")
        div.innerHTML=` <div class="bg-[#F4F1F1] rounded-lg mb-6 ">
                            <div class="flex justify-between items-center pr-3  p-2 pb-1 pt-1 ">
                                 <div>
                                    <img class="w-[80px] h-[90px]" src="${imgsrc} " alt="">
                                  </div>
                                  <div class=" font-worksans font-semibold text-[16px] ">
                                    <h1 class=" mb-2">${heading}</h1>
                                    <p class="font-[400] text-[#11111174]"><span>${price} </span>TK</p>
                                  </div>
                            </div>
                        </div>`
                        container.appendChild(div)


        
    })
}

document.getElementById("purchase").addEventListener("click",()=>{
  alert(`Purchase Successful!, Thank you for your order. Your payment is complete., success`)
   
})

// clear btn
document.getElementById("clearbtn").addEventListener("click",(e)=>{
   e.target.parentNode.parentNode.children[1].remove()
    
})