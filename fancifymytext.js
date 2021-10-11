function myfunction() {   
    alert("Hello, World!");
    document.getElementById("xlInput3").style.fontSize = "24em";
    //document.getElementById("xlInput3").style.fontSize = "24.0e";
}
function styles(){
    alert("Style change");
    document.getElementById("xlInput3").style.fontWeight = 'bold';
    document.getElementById("xlInput3").style.color = 'blue';
    document.getElementById("xlInput3").style.textDecoration = 'underline';
}
function nostyles(){
    document.getElementById("xlInput3").style.fontWeight = 'normal';
    document.getElementById("xlInput3").style.color = 'black';
    document.getElementById("xlInput3").style.textDecoration = 'none';
}
function moo(){
    //document.getElementById("xlInput3").addEventListener("input", forceInputUppercase, flase);
    //doc.ariaValueMax.toUpperCase();
    //alert("changing case");
   //document.getElementById("xlInput3").value.toUpperCase();

   let elm = document.getElementById("xlInput3");
   elm.value = elm.value.toUpperCase();

   let str = document.getElementById("xlInput3").value;
   //console.log(str);
   let parts = str.split(".");
   //console.log(parts);
   str = parts.join("-Moo");
   //console.log(str);
   document.getElementById("xlInput3").value = str;
   
}


//console.log(“The answer is: ” + 42);

// single-line comment

/**
* multi-line
* comment
*/
/*
let level = 23; // Number
let accuracyRate = 0.99; // Number
let name = "Pikachu"; // String
let temps = [55, 60, 57.5]; // Array
//dynamically-typed
let isValid = true; // no error
isValid = "hello!";
isValid = 1;

function myFunction() {
    console.log("Hello!");
    //alert("Your browser says hi!");
  }
  */
  
