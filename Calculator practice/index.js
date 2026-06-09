const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
 display.value = "";

}

function calculate() {
    try {
        display.value = eval(display.value);

        if (display.value == 0.8181818181818182) {
            window.location.href = "home.html";
          }else if(display.value == 1989){
            window.location.href = "deathnote.html"
             } else if(display.value == 2020){
                window.location.href = "2020.html"
             }
    } catch (error) {
        display.value = "error";
    }
}