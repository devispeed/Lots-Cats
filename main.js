let img = document.getElementById("image");
let cats = ["./image/cat1.jpg", "./image/cat2.jpg", "./image/cat3.jpg"];

let countor = 0
img.addEventListener('click', ()=>{
    countor = (countor +1) %3
    console.log(img.src = cats[countor])
    console.log(countor)
})