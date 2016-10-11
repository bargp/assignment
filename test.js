var calculate_distance = require("./coding").calculate_distance;

//Declare input coordinates
var input_coords = [
    { "id": "a", "value": "0,5" },
    { "id": "b", "value": "0,6" }
];
//Hardcode output for the scenario 1 

var expected_output1 = [
    { id: 'a', value: '0,5', distance: 5 },
    { id: 'b', value: '0,6', distance: 6 }
];

//Hardcode output for the scenario 2

var expected_output2 = [
    { id: 'a', value: '0,5', distance: 0 },
    { id: 'b', value: '0,6', distance: 1 }
];


describe("Test suite for the calculate_distance", function() {
 //Test case scenario 1 
    it("calc distance scenario 1 with (0,0) as origin", function() {
        var real_output = calculate_distance(input_coords, 0, 0);
        expect(real_output).toEqual(expected_output1);
    });
//Test case scenario 1 
    it("calc distance scenario 2 with (0,5) as origin", function() {

        var real_output = calculate_distance(input_coords, 0, 5);
        expect(real_output).toEqual(expected_output2);
    });
    
});
