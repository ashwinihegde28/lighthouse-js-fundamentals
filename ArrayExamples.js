let a = [null,"",undefined,[]]; //valid array of invalids 

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
 


// your code goes here
let udaciFamily =["Julia", "James","a"];
for (let i of udaciFamily){
    console.log(i);
}

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(donuts);

var donuts2 = ["cookies", "abc","cinnamon sugar", "b","creme de leche"];

donuts2.splice(-1, 0, "chocolate frosted", "glazed");
console.log(donuts2);

// for each loop demo with arrays
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
}); 



// You can test your code with a smaller array first
// var test = [12, 29, 11, 3];

// Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.
test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index]=test[index]+100;
    }
    //else 
    //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);
*/

console.log(5+"3"); // displays 53
console.log(5*"3"); //displays15
console.log(5%"3");//displays 2