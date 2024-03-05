// var list = document.getElementsByTagName("p")
// list[0].innerHTML= "<h1> this is heading one </h1>"

// var select = document.querySelectorAll(".mydiv>p")
// console.log(select);

function customMap(array, callback) {
    var newArray = []; // Create a new array to store the mapped values
    for (var i = 0; i < array.length; i++) {
    // Call the callback function for each element and push the result to the new array
    newArray.push(callback(array[i], i, array));
    }
    return newArray; // Return the new array
    }
    // Example usage:
    var numbers = [1, 2, 3, 4, 5];
    // Using the custom map function
    var doubledNumbers = customMap(numbers, function(num) {
    return num * 2;
    });
    console.log(doubledNumbers);