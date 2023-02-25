

/*const numberOfVowels = function(str) {
  // Put your solution here
  let counter = 0;
    const checker = ["a", "e", "i", "o", "u"];
    for(let char of str.toLowerCase()) { // convert the string to lowercase
        if (checker.includes(char)) {
            counter++;
        }
    }
    return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs")+"\n");
console.log(numberOfVowels("aeiou"));


const instructorWithLongestName = function(instructors) {
    let max_length_el = instructors[0];
    for(let i=1;i<instructors.length;i++)
    {
    if(instructors[i].name.length>max_length_el.name.length){
        max_length_el = instructors[i];     
    }
  }
  return max_length_el;
}
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ])));*/