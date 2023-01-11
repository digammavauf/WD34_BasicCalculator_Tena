let clearSrc = false;
let buttonClicked = (btn) => {
    let btnText = btn.innerText;
    let dspText = document.getElementById("display").value;
    if(btnText == "About") {
        return alert("BASIC CALCULATOR\n\nUsing HTML & Javascript\nwritten by John Philip Tena\nin compliance with January 11, 2023 Assignment\n\nKodego Batch WD34");
    }
    if(btnText == "Clear") {
        document.getElementById("display").value = "";
        return;
    }
    if(btnText == "Undo") {
        let txtLen = dspText.length;
        if(txtLen > 0) {
            dspText = dspText.slice(0, txtLen-1);
            document.getElementById("display").value = dspText;
        }
        return;
    }
    if(clearSrc && btnText != "+" && btnText != "-" && btnText != "*" && btnText != "/") {
        dspText = "";
    }
    if(btnText == "=") {
        if(dspText != "") {
            try {
                dspText = eval(dspText);
            } catch (error) {
                dspText = error;
            }
        }
        clearSrc = true;
    } else {
        if(btnText == ".") {
            if(dspText.indexOf(".") >= 0) {
                btnText = "";
                alert("Decimal place already used!");
            }
        }
        dspText += btnText;
        clearSrc = false;
    }    
    document.getElementById("display").value = dspText;
}