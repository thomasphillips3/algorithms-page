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

function findMax(){
  document.getElementById("max").style.visibility = "visible";
  var x = document.getElementById("maxValArr").value;
  var max = 0;
  var y = x.split(" ");

  console.log("x array: " + x);
  console.log("y array: " + y);

  for (i=0; i < y.length; i++){
    if (parseInt(y[i]) < 0){
      console.log("negative input detected");
      alert("Negative input detected");
      i = y.length;
      document.getElementById("max").style.visibility = "hidden";
    } else if (parseInt(y[i]) > max){
      max = y[i];
    }
  }
  document.getElementById("max").innerHTML = "Max: " + max;
}

function getAvg(){
  var x = document.getElementById("getAvgArr").value;
  var y = x.split(" ");

  document.getElementById("avg").innerHTML = "Average: " + average(y);
} function average(y){
  // document.getElementById("avg").style.visibility = "visible";
  console.log("average called");
  console.log("y array: " + y);

  sum = 0;
  for (i=0; i < y.length; i++){
    sum+=parseInt(y[i]);
  }
  console.log("sum: " + sum + "/num: " + y.length);
  return sum/y.length;
}

function getRev(){
  var x = document.getElementById("getRevArr").value;
  var y = x.split(" ");

  document.getElementById("rev").innerHTML = "Reverse: " + reverse(y);
}

function reverse(y){
  console.log("reverse called");
  var n = y.length;
  for (i=0; i < n/2; i++){
    var temp = y[i];
    y[i] = y[n-1-i];
    y[n-i-1] = temp;
  }
  return y;
}
