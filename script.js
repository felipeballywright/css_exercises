function modalPopUp(){
    const popUpWindow = document.getElementById("modal-container");

    document.getElementById("open-modal-button").addEventListener("click", () => {
            console.log("Open modal!");
            popUpWindow.style.visibility = "visible";
            popUpWindow.className = "show";
    });

    document.getElementById("close-modal-button").addEventListener("click", () => {
        console.log("Close modal!");
        popUpWindow.className = "hide";
        setTimeout(() => popUpWindow.style.visibility = "hidden", 1000);
    });
}

modalPopUp();