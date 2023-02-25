const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
/*
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length -1 ; i > 0  ; i--) {
    console.log(ingredients[i]);
  }




 

function lastIndexOf(){

}*/


let merge = function(array1 , array2){
  return array1.concat(array2);
  
}
let a = merge([ 1, 2, 3 ], [ 4, 5, 6 ]);
console.log(a);