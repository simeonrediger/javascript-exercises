const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldestPerson, person) => {

        oldestPersonAge = (oldestPerson.yearOfDeath ?? currentYear) -
            oldestPerson.yearOfBirth;

        personAge = (person.yearOfDeath ?? currentYear) -
            person.yearOfBirth;

        return oldestPersonAge > personAge ? oldestPerson : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
