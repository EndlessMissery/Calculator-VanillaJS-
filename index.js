//1st number
var n1 = document.getElementById("num1");

//2nd number
var n2 = document.getElementById("num2");

//result
var res = document.getElementById("result");

//Addition
    document.getElementById("add").addEventListener("click", function() {
      res.value = parseFloat(n1.value)+parseFloat(n2.value)
    })

//Subtraction
    document.getElementById("sub").addEventListener("click", function() {
        res.value = parseFloat(n1.value)-parseFloat(n2.value)
    })

//Multiplication
    document.getElementById("mul").addEventListener("click", function() {
        res.value = parseFloat(n1.value)*parseFloat(n2.value)
    })
    
//Division
    document.getElementById("div").addEventListener("click", function() {
        res.value = parseFloat(n1.value)/parseFloat(n2.value)
    })

    
