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
    const dropdownOptions = Array.from(document.querySelectorAll(".dropdown-option"));
    console.log("Before button", dropdownOptions);

    dropdownBtn.addEventListener("click", () => {
        dropdownOptions.forEach(element => {
            if(element.className === "dropdown-dropdown-hide"){
                element.className === "dropdown-option dropdown-show";
            } else if(element.className === "dropdown-option dropdown-show"){
                element.className === "dropdown-option dropdown-hide"
            }
        });
        console.log("After button", dropdownOptions)
    });


}

// if(dropdownOptions.className === "dropdown-option dropdown-hide"){
//             console.log("Change dropdown options class to SHOW");
//             dropdownOptions.forEach(element => {
//                 element.className = "dropdown-option dropdown-show"
//             });
//         } else if(dropdownOptions.className === "dropdown-option dropdown-show"){
//             console.log("Change dropdown options class to HIDE");
//             dropdownOptions.forEach(element => {
//                 element.className = "dropdown-option dropdown-hide"
//             });
//         }

modalPopUp();