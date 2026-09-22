// In-memory dummy data
const dummyUsers = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "David", email: "david@example.com" }
];

const fetchAllUsers = () => {
  return dummyUsers;
};

const createUserRecord = (userData) => {
  // Business logic to format or process user data
  return {
    name: userData.name,
    email: userData.email
  };
};

module.exports = {
  fetchAllUsers,
  createUserRecord
};