const imgbox = document.getElementById("imgbox")
const qrimg = document.getElementById("qrimg")
let inp = document.getElementById("inp")
let btn = document.querySelector(".btn")
let box = document.querySelector(".box")

btn.addEventListener("click",()=>{
    if(inp.value.length >= 1){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inp.value
        imgbox.classList.add("show-img")
    }
    else{
        box.classList.add("err")
        setTimeout(()=>{
            box.classList.remove("err")
        },1000)
    }
    
})