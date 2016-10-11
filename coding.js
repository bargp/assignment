// fs module allows us to read and write content
var fs = require('fs');
var array;

// This method is used to calculate distance of coordinates in the array passed with the (a,b)
// inputs : Array of items with key , and values as (x,y) coordinates
// output : Array of sorted items with the least distance first 

function calculate_distance(array, a, b){
// 	 x, y are point coordinates
  var x, y;
  var formula = [];
  // console.log(array);
  for(var i=0; i < array.length; i++){
    x = array[i].value.split(",")[0];
    y = array[i].value.split(",")[1];
    // pushes distance between two coordinates
    // used square root and power of 2
    formula.push(Math.sqrt(Math.pow((x-a),2) + Math.pow((y-b),2)).toFixed(2));

  }

  for(var j=0; j< formula.length; j++){
    // distance is another attribute
    array[j].distance = parseFloat(formula[j]);
    
  }

  // sorts the distance value 
  array.sort(function (one, two) {
  if (one.distance > two.distance) {
    return 1;
  }
  if (one.distance < two.distance) {
    return -1;
  }
  return 0;
  });

  // prints the array of objects with all the id, value and distance
  console.log(array);
  return array;

}


// This method is to read the json data from coordinates.json file, and when the data is available start the program
fs.readFile('coordinates.json', (err, data) => {
  if (err) throw err;
  array = JSON.parse(data);
  calculate_distance(array, 0, 0);
});

// calculate_distance(array,a,b);

exports.calculate_distance = calculate_distance;
