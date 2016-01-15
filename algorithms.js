function abs(){
  var x = parseInt(document.getElementById("absolute").value);
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

function prime(){
  var x = parseInt(document.getElementById("primality").value);
  if(isNaN(x)){
    document.getElementById("prime").innerHTML = "Invalid input. Enter a number.";
  } else if (x<2){
    document.getElementById("prime").innerHTML = "Invalid input. Enter a number greater than 2.";
  } else {
    for (var i=2; (i*i <= x); i++){
      if(x % i === 0){
        document.getElementById("prime").innerHTML = x + " is not prime.";
        i=x;
      } else{
        document.getElementById("prime").innerHTML = x + " is prime.";
      }
    }
  }
}
