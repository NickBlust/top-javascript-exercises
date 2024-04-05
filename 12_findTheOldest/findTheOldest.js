const findTheOldest = function (people) {
    for (person in people)
        if (!person[yearOfDeath])
            person.yearOfDeath = 2024;
    return people.sort((p1, p2) => (p1.yearOfDeath - p1.yearOfBirth) - (p2.yearOfDeath - p2.yearOfBirth)).slice(-1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
