// jshint esversion: 6

//3-A
let revWords1 = (str) => {
  var reverse1 = "";
  var reverseWord1 = str.split("");
  for (var i = 0; i < reverseWord1.length; i--){
    reverse1 += reverseWord1[i];
  }
  return reverse1;
};

//3-B

let revWords2 = (str) => {
  var reverse2 = "";
  var arr = str.split("");
  arr.reverse().forEach(function(reverse2) {
  console.log(reverse2);
});
};

//3-C

let revWords3 = (str) => {
  var reverse3 = "";
  var reverseWord3 = str.split("");
  var reverseWords3 = reverseWord3.reverse();
  for (var x of reverseWords3){
    reverse3 = reverse3 + x;
  }
  return reverse3;
};
