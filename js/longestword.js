(function(){
  // console.log("Longest Word");
  var btnFindLongestWord = document.getElementById("findLongestWord");
  var elResults = document.getElementById("longest");
  var elInput = document.getElementById("str2");
  btnFindLongestWord.addEventListener("click", findLongestWord, false);

  function findLongestWord() {
    elResults.style.visibility = "visible";
    str2 = elResults.innerHTML = elInput.value;

    arr=str2.split(" ");
    console.log(arr);
    for(var i=0; i<arr.length; i++) {
      arr[i] = arr[i].length;
    }
    elResults.innerHTML = "The longest word has " + arr.sort(sortNumber).reverse()[0] + " letters";
  }

  function sortNumber(x,y) {
    return x-y;
  }
}());
