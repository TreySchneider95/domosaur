let sMess = document.querySelector("span.mess-with-me")
sMess.style.fontSize = "40px"
let pMess = document.querySelector("p.mess-with-me")
pMess.style.backgroundColor = "green"
let hidePic = document.querySelector("#hide-me-area")
hidePic.style.display = "none"
let firstPic = document.querySelector("#triceratops")
firstPic.style.width = "324px"

sMess.addEventListener('click', function(){
    sMess.style.color = "orange"
})
firstPic.addEventListener('click', function(){
    firstPic.style.border = "2px solid red"
})

let featherDino = document.querySelector('#feathers')
featherDino.addEventListener("click", function(){
    featherDino.style.opacity = "0.5"
})

let backgroundBtn = document.querySelector("#toggle")
let row = document.querySelector("#row")
backgroundBtn.addEventListener("click", function(){
    if(row.style.backgroundColor){
        row.style.backgroundColor = ""
    }else{
        row.style.backgroundColor = "purple"
    }
})

let biggify = document.querySelector("#biggify")
biggify.addEventListener('mouseenter', function(){
    biggify.style.height = "200px"
    biggify.style.width = "200px"
})
biggify.addEventListener('mouseleave', function(){
    biggify.style.height = "87.75px"
    biggify.style.width = "162px"
})