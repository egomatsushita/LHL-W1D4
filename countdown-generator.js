var countdownGenerator = function(x) {
  var number = x;
  var info = "";

  return function() {
    if(number > 0) {
      info = `T-minus ${number}`;
    } else if(number === 0) {
      info = `Blast Off!`;
    } else {
      info = `Rockets already gone, bub!`;
    }
    number -= 1;

    return info;
  }
};

var countdown = countdownGenerator(3);
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
