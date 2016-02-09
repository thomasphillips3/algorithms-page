(function(){
  console.log("Hey IIFE");
  var btnCheckPalindrome = document.getElementById("checkPalindrome");
  var elResults = document.getElementById("pal");
  var elInput = document.getElementById("str");
  btnCheckPalindrome.addEventListener("click", checkPalindrome, false);

  function checkPalindrome() {
    elResults.style.visibility = "visible";
    str = elResults.innerHTML = elInput.value;
    str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    if (str === str.split('').reverse().join('')){
      elResults.innerHTML = "Palindrome";
    }
    else {
      elResults.innerHTML = "Not a palindrome";
    }
    // console.log(elInput.value);
  }
}());
