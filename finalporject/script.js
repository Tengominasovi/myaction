const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("input" , (e) => {
    const isChecked = e.target.checked;

    if(isChecked){
        body.classList.add("dark-theme");
        body.classList.remove("backgraund");
    }
    else{
        body.classList.add("backgraund")
        body.classList.remove("dark-theme");
    }
});