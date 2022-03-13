let outputScreen = document.getElementById("output");

function display(num){
    outputScreen.value += num;
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("never gonna give you up never gonna let you down never gonna tell a lie and hurt you:)")
    }
}
