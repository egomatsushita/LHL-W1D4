var students = [
  {id: 1, name: "bruce", age: 40},
  {id: 2, name: "zoidberg", age: 22},
  {id: 3, name: "alex", age: 22},
  {id: 4, name: "alex", age: 30}
];

function compare(a, b) {
  var nameA = a.name;
  var nameB = b.name;
  var ageA = a.age;
  var ageB = b.age;

  if(nameA < nameB) {
    return -1;
  } else if(nameA > nameB) {
    return 1;
  } else {
    return b.age - a.age;
  }
}

console.log(students.sort(compare));