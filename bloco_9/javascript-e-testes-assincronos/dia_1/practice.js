const userFullName = (obj) => `Hello! My name is ${obj.firstName} ${obj.lastName}`;
const userNationality = (obj) => `${obj.firstName} is ${obj.nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));