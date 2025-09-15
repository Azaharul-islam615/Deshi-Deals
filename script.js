const cartBtns=document.getElementsByClassName("cart-btn ")
for(let cartbtn of cartBtns){
    cartbtn.addEventListener("click",()=>{

        const image=cartbtn.parentNode.children[0].children[0]
        const imgsrc=image.src

        const heading=cartbtn.parentNode.children[2].innerText
        const price=cartbtn.parentNode.children[3].children[0]
        
        alert(`Product name ${heading} price ${price.innerText} Tk`)
      const totalp=price.innerText
        const totalprice=document.getElementById("totalprice")
        const total=totalprice.innerText
        const currenttotal=Number(totalp) + Number(total)

        totalprice.innerText=currenttotal.toFixed(2)
        const discount=document.getElementById("discount")
          const finalTotal=document.getElementById("finaltotal")
            
        if(currenttotal>=200){
          
        const discountAmount=(currenttotal*0.2)
        discount.innerText=discountAmount.toFixed(2)
        const lasttotal=currenttotal-discountAmount
        finalTotal.innerText=lasttotal.toFixed(2)
        
        }
        else{
          discount.innerText="0"
          finalTotal.innerText="0"
        }
        

        
        
    
        const container=document.getElementById("container")
        
        const div=document.createElement("div")
        div.innerHTML=` <div id="divcon">
        <div  class="bg-[#F4F1F1] rounded-lg mb-6 ">
                            <div class="flex justify-between items-center pr-3  p-2 pb-1 pt-1 ">
                                 <div>
                                    <img class="w-[80px] h-[90px]" src="${imgsrc} " alt="">
                                  </div>
                                  <div class=" font-worksans font-semibold text-[16px] ">
                                    <h1 class=" mb-2">${heading}</h1>
                                    <p class="font-[400] text-[#11111174]"><span>${totalp} </span>TK</p>
                                  </div>
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

 const clear=document.getElementById("clearbtn")
 clear.addEventListener("click",()=>{
  const container=document.getElementById("divcon")
   container.remove()
   const totalprice=document.getElementById("totalprice")
   const discount=document.getElementById("discount")
          const finalTotal=document.getElementById("finaltotal")
        totalprice.innerText="0"
        discount.innerText="0"
          finalTotal.innerText="0"
  
    
})
// star part
 const stars=document.getElementsByClassName('star')
 for(let star of stars){
   star.addEventListener("click",()=>{
  
  star.style.color = "red";
 
  
})
 }
