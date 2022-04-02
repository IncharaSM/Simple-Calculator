/* Here I have programmed the calculator used inbuilt functions of JS */
function clearScreen() // used to clear screen for c button in calculator
 {
    document.getElementById("result").value = "";
   }
   
   function display(value) 
   {
    document.getElementById("result").value += value;
   }

   function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
   }