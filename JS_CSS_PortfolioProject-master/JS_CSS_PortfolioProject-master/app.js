(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.addEventListener("DOMContentLoaded", function () {
    const controls = document.querySelectorAll(".control");
    const titleDisplay = document.createElement("h2");
    titleDisplay.style.position = "fixed";
    titleDisplay.style.top = "10px";
    titleDisplay.style.left = "50%";
    titleDisplay.style.transform = "translateX(-50%)";
    titleDisplay.style.opacity = "0";
    titleDisplay.style.transition = "opacity 0.5s";
    document.body.appendChild(titleDisplay);

    controls.forEach(control => {
        control.addEventListener("mouseover", function () {
            const sectionId = control.getAttribute("data-id");
            let titleText = "";
            switch (sectionId) {
                case "about":
                    titleText = "A propos de moi";
                    break;
                case "portfolio":
                    titleText = "Mon Portfolio";
                    break;
                case "blogs":
                    titleText = "Mes Blogs";
                    break;
                case "contact":
                    titleText = "Contactez-moi";
                    break;
            }
            titleDisplay.textContent = "Aller à : " + titleText;
            titleDisplay.style.opacity = "1";
        });

        control.addEventListener("mouseout", function () {
            titleDisplay.style.opacity = "0";
        });
    });
});
