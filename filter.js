  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
//accessing the people array, filtering and then call back function to filter for people 21 or over
const legalAge = people.filter(person => person.age >= 21);
console.log(legalAge);

const paul = people.filter(person => person.name === "Paul");
// Could also be:
// const paul = people.filter(p => p.name === "Paul");

// To get the object itself, we can append [0] to get the first and only element in the resulting array
// const paul = people.filter(p => p.name === "Paul")[0];
console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

//const candidate = students.filter(student => {
//  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//  return strongSkills.length > 0;
//});

//const hasStrongSkills = student => {
//  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//  return strongSkills.length > 0;
}
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidate = students.filter(hasStrongSkills);
console.log(candidate);
