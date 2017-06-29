var wrapLog = function(callback, name) {

  return function() {return `${name}(${Array.from(arguments)} => ${callback.apply(this, arguments)})`;};
  /*var name = name;
  var info = "";
  return function() {
    var x = arguments[0];
    var y = arguments[1];

    if(name === "area") {
      info = `area(${x}, ${y}) => ${area(x, y)}`;
    } else if(name === "volume") {
      var z = arguments[2];
      info = `volume(${x}, ${y}, ${z}) => ${volume(x, y, z)}`;
    }
    return info;
  };*/
};

var area = function(x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function(x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24
