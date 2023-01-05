// const findTheOldest = function(array) {
//     let oldest = 0;
//     let name = "";
//     array.forEach(person => {
//         let age = 0;
//         if ("yearOfDeath" in person) {
//             age = person.yearOfDeath - person.yearOfBirth;
//         }
//         else {
//             age = (new Date().getFullYear()) - person.yearOfBirth;
//         }
//         if (age > oldest) {
//             oldest = age;
//             name = person;
//         }
//     });
//     return name;
// }

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        //console.log(`${currentAge} > ${oldestAge} = ${currentAge > oldestAge}`)
        return currentAge > oldestAge ? currentPerson : oldest;
    });
}

const getAge = function(birth, death) {
    if (!death) return (new Date().getFullYear()) - birth;
    return death - birth;
}

// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//       return oldestAge < currentAge ? currentPerson : oldest;
//     })
// }
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
// }

// Do not edit below this line
module.exports = findTheOldest;
