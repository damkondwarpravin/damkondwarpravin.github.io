function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "mynav") {
        x.className += " responsive";
    } else {
        x.className = "mynav";
    }
}

function showDiv(tab){
    debugger;
    if (tab.id == "home" || tab.id == undefined) {
        document.getElementById("AccordDiv").style.display = 'none';
        document.getElementById("ModalDiv").style.display = 'none';
        document.getElementById("HomeDiv").style.display = '';
    }
    else if (tab.id == "Accordian") {
        document.getElementById("AccordDiv").style.display = '';
        document.getElementById("ModalDiv").style.display = 'none';
        document.getElementById("HomeDiv").style.display = 'none';
    }
    else if (tab.id == "Modal") {
        document.getElementById("AccordDiv").style.display = 'none';
        document.getElementById("ModalDiv").style.display = '';
        document.getElementById("HomeDiv").style.display = 'none';
    }
}






