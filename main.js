
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode")
    btn.classList.toggle("justify-end")
})