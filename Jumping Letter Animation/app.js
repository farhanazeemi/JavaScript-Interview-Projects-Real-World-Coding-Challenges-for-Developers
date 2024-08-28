const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("active");
    }
});
