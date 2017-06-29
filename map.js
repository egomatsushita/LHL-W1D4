var words = ["ground", "control", "to", "major", "tom"];

function map(array, someFunction) {
  var list = []
  for(var i = 0; i < array.length; i++){
    list.push(someFunction(array[i]));
  }
  return list;
}

var result = map(words, function(word) {
  return word.length;
});

console.log(result);