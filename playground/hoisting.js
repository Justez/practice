const varTest = () => { //getting global scope here
    var x = 2;
    console.log(x);
    console.log(y);
    var y = 2;

    b = 'global b'
    c = 'global c'
    console.log(b, c);
    var c;
    console.log('not', c);
}

const funcTest = () => {
    hoistedFunction();

    function hoistedFunction() {
        console.log('i was hoisted');
    }

    try {
        undefinedValueFunction();
    } catch (e) {
        console.log('called undefinedValueFunction:', e.toString());
    }

    try {
        uninitializedValueFunction();
    } catch (e) {
        console.log('called uninitializedValueFunction:', e.toString());
    }

    var undefinedValueFunction = () => {
        console.log('imma function');
    }

    const uninitializedValueFunction = () => {
        console.log('i dont have a memory space yet')
    }
}

varTest();
console.log('global b -', typeof b);

funcTest();

// Example 1 
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
//This prints value of y as undefined as JavaScript only hoists declarations 
var y = 2; // Declare and Initialize y


// Example 2 
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = 'Cran'; //Initialize a
b = 'berry'; //Initialize b
console.log(a + "" + b); // 'Cranberry'