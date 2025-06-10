function modalPopUp(){
    const popUpWindow = document.getElementById("modal-container");
    const openModalBtn = document.getElementById("open-modal-button");
    const closeModalBtn = document.getElementById("close-modal-button");

    openModalBtn.addEventListener("click", () => {
            popUpWindow.className = "show";
    });

    closeModalBtn.addEventListener("click", () => {
        popUpWindow.className = "hide";
    });

    const dropdownBtn = document.getElementById("dropdown-title");
    const dropdownOptions = document.querySelectorAll(".dropdown-option");
    const dropdownOptionsArr = Array.from(dropdownOptions);

    dropdownBtn.addEventListener("click", () => {
        dropdownOptions.forEach(element => {
            if(element.classList.contains("dropdown-hide")){
                element.className = "dropdown-option dropdown-show";
            } else if(element.classList.contains("dropdown-show")){
                element.className = "dropdown-option dropdown-hide"
            }
        });
        console.log("After button", dropdownOptions)
    });


}

modalPopUp();