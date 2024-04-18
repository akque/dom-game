const cont = document.querySelector(".container")
const cancelBtn = document.querySelector(".cancel")
const count = document.querySelector(".count")

cancelBtn.addEventListener("click", cancel)

function render (i) {
    const div = document.createElement("div")
    div.classList.add("block")
    div.classList.add("red")

    cont.append(div)
    div.addEventListener("click", (e) => paint(e, i))
}

function paint (event, i) {
    const allsquares = document.querySelectorAll(".block")
    if(!allsquares[i].classList.contains("red")) {
        return
    }
    const div = event.target
    div.classList.toggle("red")
    if(i < 10){
        allsquares[allsquares.length - 10 + i].classList.toggle("red")
    } else {
        allsquares[i - 10].classList.toggle("red")
    }
    if(i % 10 === 9){
        allsquares[i - 9].classList.toggle("red")
    } else {
        allsquares[i + 1].classList.toggle("red")
    }
    if(i % 10 === 0){
        allsquares[i + 9].classList.toggle("red")
    } else {
        allsquares[i -1].classList.toggle("red")
    }
    if(i >= 90){
        allsquares[i % 10].classList.toggle("red")
    } else {
        allsquares[i + 10].classList.toggle("red")
    }

    const allgreensquares = Array.from(allsquares)
        .filter(element => !element.classList.contains("red"))

    count.textContent = allgreensquares.length
    count.classList.remove("none")
  
}

function switchToggle () {

}

function cancel () {
    const divs = cont.querySelectorAll(".block")
    divs.forEach(element => {
        element.classList.add("red")
    });
    hideCount()
}

const hideCount = () => {count.classList.add("none")
count.textContent = 0}

hideCount()

for(let i = 0; i < 100; i++) {
    render(i)
}

// for(let i = 0; i < 100; i++) {
//     divs.array.forEach(element => {
//         if(divs[i].classList.contains("green")) {
//             count.textContent = +count.textContent +1
//         }
//         else {
//             none
//         }
//     });
// }