function getselect(){
    var kmTypeBtn = select.options[select.selectedIndex].text;

    if(kmTypeBtn == "Kilometer"){
        document.getElementById("convert").setAttribute("value", "Convert to meter");
    }
    else{
        document.getElementById("convert").setAttribute("value", "Convert to kilometer");
    }
}

function getvalue(){
    var kmType = select.options[select.selectedIndex].text;
    var kmSize = select.options[select.selectedIndex].value;
    var km = document.getElementById("number").value;

    if(kmType == "Kilometer"){
        var a = km * kmSize;

        document.getElementById("km-title").innerText = a;
        document.getElementById("km-type").innerText = "Meter";
        document.getElementById("shownumber").style.display = "flex";
        
    }
    else{
        var b = km / kmSize;

        document.getElementById("km-title").innerText = b;
        document.getElementById("km-type").innerText = "Kilometer";
        document.getElementById("shownumber").style.display = "flex";
    }
}