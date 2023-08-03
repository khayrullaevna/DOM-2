const elInput = document.querySelector(".input-num")
// const elButton = document.querySelector(".btn")
const elDivRed = document.querySelector(".red")
const elDivYellow = document.querySelector(".yellow")

elInput.addEventListener("click", function(evt){
    evt.preventDefault()

    elInput.value = Number(elInput.value)

    if(elInput.value<10){
        elDivRed.style.border = "10px solid";
        elDivRed.style.borderRadius = "50%"
    }
    else if (elInput.value>=10){
        elDivRed.style.border = "0";
        elDivYellow.style.border = "10px solid";
        elDivYellow.style.borderRadius = "50%"
    }
}
)