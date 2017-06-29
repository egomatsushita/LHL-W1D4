function findWaldo(arr, found) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}!`);
}

var names = ["Alice", "Bob", "Waldo", "Winston"];

findWaldo(names, actionWhenFound);