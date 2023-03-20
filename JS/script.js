
document.querySelector("#bar").addEventListener("click", ()=>{
    document.querySelector("#navbar").classList.add("active")
})

document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector("#navbar").classList.remove("active")
})



let mainImg = document.getElementById("Main-img");
let smallImg = document.getElementsByClassName("small-img");





smallImg[0].addEventListener("click", ()=>{
    mainImg.src = smallImg[0].src;
})

smallImg[1].addEventListener("click", ()=>{
    mainImg.src = smallImg[1].src;
})

smallImg[2].addEventListener("click", ()=>{
    mainImg.src = smallImg[2].src;
})

smallImg[3].addEventListener("click", ()=>{
    mainImg.src = smallImg[3].src;
})



