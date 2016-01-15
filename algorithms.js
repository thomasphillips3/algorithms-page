function abs(){
  var x = parseInt(document.getElementById("number").value);
  if (isNaN(x)){
    document.getElementById("abs").innerHTML = "Invalid input";
  } else if (x<0){
    document.getElementById("abs").innerHTML = "abs(" + x + ") = " + (-x);
    console.log("#abs(" + x + ") = " + (-x));
    // $("abs").show();
  } else{
    document.getElementById("abs").innerHTML = "abs(" + x + ") = " + x;
    console.log("#abs(" + x + ") = " + x);
    // $("abs").show();
  }
}
