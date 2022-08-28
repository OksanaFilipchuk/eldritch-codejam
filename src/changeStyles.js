const ancient = document.querySelectorAll(".ancients-img");

function changeActiveAncient(event){
    let el = event.target;
    console.log(Array.from(el.parentElement.children))
    Array.from(el.parentElement.children).forEach(elem => elem.classList.remove("active"))
    el.classList.add("active");
    shuffleButton.classList.remove("shuffle")
}
ancient.forEach(el => {
    el.addEventListener("click", changeActiveAncient);
    
})
